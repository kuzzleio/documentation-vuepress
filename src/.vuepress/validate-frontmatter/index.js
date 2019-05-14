const { writeFileSync } = require('fs');
const { pickBy } = require('lodash');

const propSpecs = {
  type: {
    type: String,
    allowedValued: ['root', 'branch', 'page'],
    default: 'branch'
  },
  order: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  nosidebar: {
    type: Boolean
  },
  code: {
    type: Boolean
  }
};

const errors = {};

module.exports = (options, ctx) => ({
  name: 'validate-frontmatter',
  extendPageData($page) {
    const {
      _filePath, // file's absolute path
      frontmatter // page's frontmatter object
    } = $page;

    const requiredProps = pickBy(propSpecs, s => s.required === true);
    Object.keys(requiredProps).forEach(propName => {
      if (Object.keys(frontmatter).indexOf(propName) === -1) {
        addError(errors, _filePath, {
          error: 'MISSING_PROP',
          expected: propName
        });
      }
    });

    Object.keys(frontmatter).forEach(key => {
      if (!key) {
        addError(errors, _filePath, {
          error: 'EMPTY_KEY'
        });
        return;
      }
      if (!hasOwn(propSpecs, key)) {
        addError(errors, _filePath, {
          error: 'INVALID_KEY',
          got: key
        });
        return;
      }
      const value = frontmatter[key];
      if (value === null || typeof value === 'undefined') {
        addError(errors, _filePath, {
          error: 'EMPTY_VALUE',
          key
        });
        return;
      }
      const propSpec = propSpecs[key];
      const assertResult = assertType(value, propSpec.type);
      if (!assertResult.valid) {
        addError(errors, _filePath, {
          error: 'INVALID_TYPE',
          key,
          expected: getType(propSpec.type),
          got: typeof value
        });
        return;
      }
      if (hasOwn(propSpec, 'allowedValues')) {
        if (!assertAllowedValue(value, propSpec.allowedValues)) {
          addError(errors, _filePath, {
            error: 'INVALID_VALUE',
            key,
            expected: propSpec.allowedValues,
            got: value
          });
        }
      }
    });
  },
  ready() {
    if (Object.keys(errors).length) {
      writeFileSync(
        './frontmatter-errors.json',
        JSON.stringify(errors, null, 4)
      );
      throw new Error(
        'Some pages do not have a valid frontmatter. Please refer to frontmatter-errors.json'
      );
    }
  }
});

function addError(errors, path, error) {
  if (!errors[path]) {
    errors[path] = [];
  }
  errors[path].push(error);
}

function assertAllowedValue(value, allowedValues) {
  return allowedValues.indexOf(value) > -1;
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

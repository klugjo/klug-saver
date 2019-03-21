import _ from 'lodash';

// Custom Matchers
global.expect.extend({
  toHaveStyle(comp, name, value) {
    let styleRaw;

    if (comp && comp.props) {
      styleRaw = comp.props().style;
    }
    
    if (!styleRaw || _.isEmpty(styleRaw)) {
      return {
        message: () => 'Could not find the style prop',
        pass: false
      };
    }

    const style = _.assign({}, ..._.flattenDeep(styleRaw));

    if (style[name] === value) {
      return {
        message: () => '',
        pass: true
      };
    }

    return {
      message: () => `Expected ${name} to equal ${value}. Found ${style[name]} instead.`,
      pass: false
    };
  }
});

// const num = '1212121132';

// const reg = /(?!^)(?=(\d{3})+$)/g

// console.log(num.replace(reg, ','), '>>>>>>');

function format(num) {
  return (
    num
      // .toFixed(2)
      .replace(/\B(?=(\d{3})+\b)/g, ",")
  );
  // .replace(/^/, "$$ ");
}
console.log(format("1888.00"));

// str =
//   '<p><strong>发送到的说法的是非得失是的是的</strong></p><p>sdfsdf<span>sdfsdfs发斯蒂芬斯蒂芬s</span></p><p><span>fdsfsdfdsfdsf佛</span></p><p><img src="http://www.guang.com/4ia3K0Q/0" /><img src="http://mmbiz.qpic.cn/mmbiz_jpg/BO947uibfQFBbfSTfg/0" /></p>';

// const reg = /src="([^"]+)"/g;

// console.log(str.match(reg));

// // 支持下面3中格式的正则
// function escapeHTML(str) {
//   var escapeChars = {
//     "<": "lt",
//     ">": "gt",
//     '"': "quot",
//     "&": "amp",
//     "'": "#39",
//   };
//   const reg = new RegExp("[" + Object.keys(escapeChars).join("") + "]", "g");
//   return str.replace(reg, function (match) {
//     console.log(match, ">>>>>>");

//     return "&" + escapeChars[match] + ";";
//   });
// }

// var a = escapeHTML("<div>Blah blah blah</div>");

function Create(paths) {
  const tpls = paths.reduce((memo, i) => {
    const path = i;
    const subPath = `${path}/*`;

    memo.push(path);
    memo.push(subPath);
    return memo;
  }, []);

  console.log(tpls, "tpls>>>>>>");
}

Create([
  "goods",
  "sample",
  "marketing",
  "data-analyze",
  "advert",
  "recommend",
  "setting",
  "export-list",
  "dragonfly",
]);

function CustomRouteFactory(options) {
  const method = options.method;
  const isIndex = !!options.isIndex;
  return function customApiRoute(target, propertyKey, descriptor) {
    if (options.name)
      MetadataFactory(options.name)(target, propertyKey, descriptor);
    options.tpls.forEach((item) => {
      const [tpl, sections] =
        typeof item === "string" ? [item, {}] : [item.tpl, item.sections || {}];
      RouteFactory({
        method,
        path: [{ path: "", sections, urlTpl: tpl }],
        isIndex,
        tpl,
      })(target, propertyKey, descriptor);
    });
  };
}

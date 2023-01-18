import { a as ajv, c as codegen, g as getDefaultExportFromCjs } from './ajv-78f1138c.js';

function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
        e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
            if (k !== 'default' && !(k in n)) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    });
    return Object.freeze(n);
}

var dist = {exports: {}};

var formats = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
	function fmtDef(validate, compare) {
	    return { validate, compare };
	}
	exports.fullFormats = {
	    // date: http://tools.ietf.org/html/rfc3339#section-5.6
	    date: fmtDef(date, compareDate),
	    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
	    time: fmtDef(time, compareTime),
	    "date-time": fmtDef(date_time, compareDateTime),
	    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
	    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
	    uri,
	    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
	    // uri-template: https://tools.ietf.org/html/rfc6570
	    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
	    // For the source: https://gist.github.com/dperini/729294
	    // For test cases: https://mathiasbynens.be/demo/url-regex
	    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
	    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
	    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
	    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
	    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
	    regex,
	    // uuid: http://tools.ietf.org/html/rfc4122
	    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
	    // JSON-pointer: https://tools.ietf.org/html/rfc6901
	    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
	    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
	    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
	    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
	    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
	    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
	    // byte: https://github.com/miguelmota/is-base64
	    byte,
	    // signed 32 bit integer
	    int32: { type: "number", validate: validateInt32 },
	    // signed 64 bit integer
	    int64: { type: "number", validate: validateInt64 },
	    // C-type float
	    float: { type: "number", validate: validateNumber },
	    // C-type double
	    double: { type: "number", validate: validateNumber },
	    // hint to the UI to hide input strings
	    password: true,
	    // unchecked string payload
	    binary: true,
	};
	exports.fastFormats = {
	    ...exports.fullFormats,
	    date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
	    time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareTime),
	    "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
	    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
	    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
	    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
	    // email (sources from jsen validator):
	    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
	    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
	    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
	};
	exports.formatNames = Object.keys(exports.fullFormats);
	function isLeapYear(year) {
	    // https://tools.ietf.org/html/rfc3339#appendix-C
	    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	}
	const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
	const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	function date(str) {
	    // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
	    const matches = DATE.exec(str);
	    if (!matches)
	        return false;
	    const year = +matches[1];
	    const month = +matches[2];
	    const day = +matches[3];
	    return (month >= 1 &&
	        month <= 12 &&
	        day >= 1 &&
	        day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]));
	}
	function compareDate(d1, d2) {
	    if (!(d1 && d2))
	        return undefined;
	    if (d1 > d2)
	        return 1;
	    if (d1 < d2)
	        return -1;
	    return 0;
	}
	const TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
	function time(str, withTimeZone) {
	    const matches = TIME.exec(str);
	    if (!matches)
	        return false;
	    const hour = +matches[1];
	    const minute = +matches[2];
	    const second = +matches[3];
	    const timeZone = matches[5];
	    return (((hour <= 23 && minute <= 59 && second <= 59) ||
	        (hour === 23 && minute === 59 && second === 60)) &&
	        (!withTimeZone || timeZone !== ""));
	}
	function compareTime(t1, t2) {
	    if (!(t1 && t2))
	        return undefined;
	    const a1 = TIME.exec(t1);
	    const a2 = TIME.exec(t2);
	    if (!(a1 && a2))
	        return undefined;
	    t1 = a1[1] + a1[2] + a1[3] + (a1[4] || "");
	    t2 = a2[1] + a2[2] + a2[3] + (a2[4] || "");
	    if (t1 > t2)
	        return 1;
	    if (t1 < t2)
	        return -1;
	    return 0;
	}
	const DATE_TIME_SEPARATOR = /t|\s/i;
	function date_time(str) {
	    // http://tools.ietf.org/html/rfc3339#section-5.6
	    const dateTime = str.split(DATE_TIME_SEPARATOR);
	    return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1], true);
	}
	function compareDateTime(dt1, dt2) {
	    if (!(dt1 && dt2))
	        return undefined;
	    const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
	    const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
	    const res = compareDate(d1, d2);
	    if (res === undefined)
	        return undefined;
	    return res || compareTime(t1, t2);
	}
	const NOT_URI_FRAGMENT = /\/|:/;
	const URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function uri(str) {
	    // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
	    return NOT_URI_FRAGMENT.test(str) && URI.test(str);
	}
	const BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function byte(str) {
	    BYTE.lastIndex = 0;
	    return BYTE.test(str);
	}
	const MIN_INT32 = -(2 ** 31);
	const MAX_INT32 = 2 ** 31 - 1;
	function validateInt32(value) {
	    return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
	}
	function validateInt64(value) {
	    // JSON and javascript max Int is 2**53, so any int that passes isInteger is valid for Int64
	    return Number.isInteger(value);
	}
	function validateNumber() {
	    return true;
	}
	const Z_ANCHOR = /[^\\]\\Z/;
	function regex(str) {
	    if (Z_ANCHOR.test(str))
	        return false;
	    try {
	        new RegExp(str);
	        return true;
	    }
	    catch (e) {
	        return false;
	    }
	}
	
} (formats));

var limit = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatLimitDefinition = void 0;
	const ajv_1 = ajv.exports;
	const codegen_1 = codegen;
	const ops = codegen_1.operators;
	const KWDs = {
	    formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
	    formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
	    formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
	    formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE },
	};
	const error = {
	    message: ({ keyword, schemaCode }) => codegen_1.str `should be ${KWDs[keyword].okStr} ${schemaCode}`,
	    params: ({ keyword, schemaCode }) => codegen_1._ `{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`,
	};
	exports.formatLimitDefinition = {
	    keyword: Object.keys(KWDs),
	    type: "string",
	    schemaType: "string",
	    $data: true,
	    error,
	    code(cxt) {
	        const { gen, data, schemaCode, keyword, it } = cxt;
	        const { opts, self } = it;
	        if (!opts.validateFormats)
	            return;
	        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
	        if (fCxt.$data)
	            validate$DataFormat();
	        else
	            validateFormat();
	        function validate$DataFormat() {
	            const fmts = gen.scopeValue("formats", {
	                ref: self.formats,
	                code: opts.code.formats,
	            });
	            const fmt = gen.const("fmt", codegen_1._ `${fmts}[${fCxt.schemaCode}]`);
	            cxt.fail$data(codegen_1.or(codegen_1._ `typeof ${fmt} != "object"`, codegen_1._ `${fmt} instanceof RegExp`, codegen_1._ `typeof ${fmt}.compare != "function"`, compareCode(fmt)));
	        }
	        function validateFormat() {
	            const format = fCxt.schema;
	            const fmtDef = self.formats[format];
	            if (!fmtDef || fmtDef === true)
	                return;
	            if (typeof fmtDef != "object" ||
	                fmtDef instanceof RegExp ||
	                typeof fmtDef.compare != "function") {
	                throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
	            }
	            const fmt = gen.scopeValue("formats", {
	                key: format,
	                ref: fmtDef,
	                code: opts.code.formats ? codegen_1._ `${opts.code.formats}${codegen_1.getProperty(format)}` : undefined,
	            });
	            cxt.fail$data(compareCode(fmt));
	        }
	        function compareCode(fmt) {
	            return codegen_1._ `${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
	        }
	    },
	    dependencies: ["format"],
	};
	const formatLimitPlugin = (ajv) => {
	    ajv.addKeyword(exports.formatLimitDefinition);
	    return ajv;
	};
	exports.default = formatLimitPlugin;
	
} (limit));

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const formats_1 = formats;
	const limit_1 = limit;
	const codegen_1 = codegen;
	const fullName = new codegen_1.Name("fullFormats");
	const fastName = new codegen_1.Name("fastFormats");
	const formatsPlugin = (ajv, opts = { keywords: true }) => {
	    if (Array.isArray(opts)) {
	        addFormats(ajv, opts, formats_1.fullFormats, fullName);
	        return ajv;
	    }
	    const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
	    const list = opts.formats || formats_1.formatNames;
	    addFormats(ajv, list, formats, exportName);
	    if (opts.keywords)
	        limit_1.default(ajv);
	    return ajv;
	};
	formatsPlugin.get = (name, mode = "full") => {
	    const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
	    const f = formats[name];
	    if (!f)
	        throw new Error(`Unknown format "${name}"`);
	    return f;
	};
	function addFormats(ajv, list, fs, exportName) {
	    var _a;
	    var _b;
	    (_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 ? _a : (_b.formats = codegen_1._ `require("ajv-formats/dist/formats").${exportName}`);
	    for (const f of list)
	        ajv.addFormat(f, fs[f]);
	}
	module.exports = exports = formatsPlugin;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = formatsPlugin;
	
} (dist, dist.exports));

var index = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

var formatPlugin = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': index
}, [dist.exports]);

export { formatPlugin as default };

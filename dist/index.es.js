import React from 'react';
import { attachField } from 'react-forms';
import { Rating } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import _ from 'lodash';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var MUIRating = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var icons = fieldProps.icons, defaultValue = fieldProps.defaultValue, labels = fieldProps.labels, _c = fieldProps.description, description = _c === void 0 ? '' : _c;
    var getIconContainer = function (IconProps) {
        var value = IconProps.value, others = __rest(IconProps, ["value"]);
        if (icons && value < icons.length)
            return React.createElement("span", __assign({}, others), icons[value]);
        if (icons && icons.length)
            return React.createElement("span", __assign({}, others), icons[0]);
        return React.createElement("span", null);
    };
    //@ts-ignore
    var handleChange = function (event, value) {
        formikProps.setFieldValue(_.get(fieldProps, 'name'), value);
    };
    var getLabelText = function (value) {
        if (labels && value < labels.length)
            return labels[value];
        if (labels && labels.length)
            return labels[0];
        return "";
    };
    var config = __assign({ IconContainerComponent: icons ? getIconContainer : undefined, defaultValue: defaultValue, getLabelText: labels ? getLabelText : undefined, onChange: handleChange }, props);
    return React.createElement(React.Fragment, null,
        React.createElement(Box, { component: "fieldset", mb: 3, borderColor: "transparent" },
            React.createElement(Typography, { component: "legend" }, description),
            React.createElement(Rating, __assign({}, config))),
        " ");
};

attachField('rating', React.createElement(MUIRating, null));

export { MUIRating };
//# sourceMappingURL=index.es.js.map

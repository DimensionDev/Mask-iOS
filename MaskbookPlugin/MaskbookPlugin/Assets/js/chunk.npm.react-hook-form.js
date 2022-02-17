"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2598],{

/***/ 78333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ Controller),
/* harmony export */   "KN": () => (/* binding */ appendErrors),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "t8": () => (/* binding */ set),
/* harmony export */   "cI": () => (/* binding */ useForm)
/* harmony export */ });
/* unused harmony exports FormProvider, useController, useFieldArray, useFormContext, useFormState, useWatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (data) => data instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (isObject(obj) && path) {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    }
    return undefined;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormContext);
const FormProvider = (props) => (React.createElement(FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (isProxyEnabled, formState, readFormStateRef, localReadFormStateRef, isRoot = true) => isProxyEnabled
    ? new Proxy(formState, {
        get: (obj, prop) => {
            if (prop in obj) {
                if (readFormStateRef.current[prop] !== VALIDATION_MODE.all) {
                    readFormStateRef.current[prop] = isRoot
                        ? VALIDATION_MODE.all
                        : true;
                }
                localReadFormStateRef &&
                    (localReadFormStateRef.current[prop] = true);
                return obj[prop];
            }
            return undefined;
        },
    })
    : formState;

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, readFormStateRef, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(readFormStateRef).length ||
        Object.keys(formState).find((key) => readFormStateRef[key] ===
            (isRoot ? VALIDATION_MODE.all : true)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== 'undefined';

function useFormState(props) {
    const { control, name } = props || {};
    const methods = useFormContext();
    const { formStateRef, subjectsRef, readFormStateRef } = control || methods.control;
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    nameRef.current = name;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(formStateRef.current);
    const readFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, readFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, formStateRef.current), formState)),
        });
        return () => formStateSubscription.unsubscribe();
    }, []);
    return getProxyFormState(isProxyEnabled, formState, readFormStateRef, readFormState, false);
}

function useController({ name, rules, defaultValue, control, shouldUnregister, }) {
    const methods = useFormContext();
    const { defaultValuesRef, register, fieldsRef, unregister, namesRef, subjectsRef, shouldUnmount, inFieldArrayActionRef, } = control || methods.control;
    const field = get(fieldsRef.current, name);
    const [value, setInputStateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(field && field._f && !isUndefined(field._f.value)
        ? field._f.value
        : isUndefined(get(defaultValuesRef.current, name))
            ? defaultValue
            : get(defaultValuesRef.current, name));
    const { onChange, onBlur, ref } = register(name, Object.assign(Object.assign({}, rules), { value }));
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const controllerSubscription = subjectsRef.current.control.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        const field = get(fieldsRef.current, name);
        if (field && field._f) {
            field._f._c = true;
        }
        return () => {
            controllerSubscription.unsubscribe();
            const shouldUnmountField = shouldUnmount || shouldUnregister;
            if (isNameInFieldArray(namesRef.current.array, name)
                ? shouldUnmountField && !inFieldArrayActionRef.current
                : shouldUnmountField) {
                unregister(name);
            }
            else {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    field._f.mount = false;
                }
            }
        };
    }, [name]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                onBlur({
                    target: {
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => elm && ref(elm),
        },
        formState,
        fieldState: {
            invalid: !!get(formState.errors, name),
            isDirty: !!get(formState.dirtyFields, name),
            isTouched: !!get(formState.touchedFields, name),
            error: get(formState.errors, name),
        },
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

const getFieldsValues = (fieldsRef, output = {}) => {
    for (const name in fieldsRef.current) {
        const field = fieldsRef.current[name];
        if (field && !isNullOrUndefined(output)) {
            const _f = field._f;
            const current = omit(field, '_f');
            set(output, name, _f && _f.ref
                ? _f.ref.disabled || (_f.refs && _f.refs.every((ref) => ref.disabled))
                    ? undefined
                    : _f.value
                : Array.isArray(field)
                    ? []
                    : {});
            current &&
                getFieldsValues({
                    current,
                }, output[name]);
        }
    }
    return output;
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign({ [keyName]: (value && value[keyName]) || generateId() }, value)));

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        isDateObject(object1) ||
        isDateObject(object2)) {
        return object1 === object2;
    }
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...data];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const useFieldArray = ({ control, name, keyName = 'id', shouldUnregister, }) => {
    const methods = useFormContext();
    const focusNameRef = React.useRef('');
    const isMountedRef = React.useRef(false);
    const { getIsDirty, namesRef, fieldsRef, defaultValuesRef, formStateRef, subjectsRef, readFormStateRef, updateIsValid, fieldArrayDefaultValuesRef, unregister, shouldUnmount, inFieldArrayActionRef, register, } = control || methods.control;
    const [fields, setFields] = React.useState(mapIds((get(fieldsRef.current, name) && isMountedRef.current
        ? get(getFieldsValues(fieldsRef), name)
        : get(fieldArrayDefaultValuesRef.current, getNodeParentName(name))
            ? get(fieldArrayDefaultValuesRef.current, name)
            : get(defaultValuesRef.current, name)) || [], keyName));
    set(fieldArrayDefaultValuesRef.current, name, [...fields]);
    namesRef.current.array.add(name);
    const omitKey = (fields) => fields.map((field = {}) => omit(field, keyName));
    const getCurrentFieldsValues = () => {
        const values = get(getFieldsValues(fieldsRef), name, []);
        return mapIds(get(fieldArrayDefaultValuesRef.current, name, []).map((item, index) => (Object.assign(Object.assign({}, item), values[index]))), keyName);
    };
    const getFocusFieldName = (index, options) => options && !options.shouldFocus
        ? options.focusName || `${name}.${options.focusIndex}.`
        : `${name}.${index}.`;
    const setFieldsAndNotify = (fieldsValues = []) => setFields(mapIds(fieldsValues, keyName));
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const batchStateUpdate = (method, args, updatedFieldArrayValues = [], shouldSet = true) => {
        inFieldArrayActionRef.current = true;
        if (get(fieldsRef.current, name)) {
            const output = method(get(fieldsRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldsRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touchedFields &&
            get(formStateRef.current.touchedFields, name)) {
            const output = method(get(formStateRef.current.touchedFields, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touchedFields, name, output);
            cleanup(formStateRef.current.touchedFields);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updatedFieldArrayValues &&
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            cleanup(formStateRef.current.dirtyFields);
        }
        subjectsRef.current.state.next({
            isDirty: getIsDirty(name, omitKey(updatedFieldArrayValues)),
            errors: formStateRef.current.errors,
            isValid: formStateRef.current.isValid,
        });
    };
    const registerFieldArray = (values, index = 0, parentName = '') => values.forEach((appendValueItem, valueIndex) => {
        const rootName = `${parentName || name}.${parentName ? valueIndex : index + valueIndex}`;
        isPrimitive(appendValueItem)
            ? register(rootName, {
                value: appendValueItem,
            })
            : Object.entries(appendValueItem).forEach(([key, value]) => {
                const inputName = rootName + '.' + key;
                Array.isArray(value)
                    ? registerFieldArray(value, valueIndex, inputName)
                    : register(inputName, { value });
            });
    });
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = append(getCurrentFieldsValues(), appendValue);
        const currentIndex = updatedFieldArrayValues.length - appendValue.length;
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues, false);
        registerFieldArray(appendValue, currentIndex);
        focusNameRef.current = getFocusFieldName(currentIndex, options);
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), prependValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(prependValue);
        focusNameRef.current = getFocusFieldName(0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(getCurrentFieldsValues(), index);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValues);
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = insert(getCurrentFieldsValues(), index, insertValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(insertValue, index);
        focusNameRef.current = getFocusFieldName(index, options);
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, fieldValues, false);
        setFieldsAndNotify(fieldValues);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        setFieldsAndNotify(fieldValues);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
        }, fieldValues, false);
    };
    React.useEffect(() => {
        inFieldArrayActionRef.current = false;
        if (namesRef.current.watchAll) {
            subjectsRef.current.state.next({});
        }
        else {
            for (const watchField of namesRef.current.watch) {
                if (name.startsWith(watchField)) {
                    subjectsRef.current.state.next({});
                    break;
                }
            }
        }
        subjectsRef.current.watch.next({
            name,
            values: getFieldsValues(fieldsRef),
        });
        focusNameRef.current &&
            focusFieldBy(fieldsRef.current, (key) => key.startsWith(focusNameRef.current));
        focusNameRef.current = '';
        subjectsRef.current.array.next({
            name,
            values: omitKey([...fields]),
        });
        readFormStateRef.current.isValid && updateIsValid();
    }, [fields, name]);
    React.useEffect(() => {
        const fieldArraySubscription = subjectsRef.current.array.subscribe({
            next({ name: inputFieldArrayName, values, isReset }) {
                if (isReset) {
                    unset(fieldsRef.current, inputFieldArrayName || name);
                    inputFieldArrayName
                        ? set(fieldArrayDefaultValuesRef.current, inputFieldArrayName, values)
                        : (fieldArrayDefaultValuesRef.current = values);
                    setFieldsAndNotify(get(fieldArrayDefaultValuesRef.current, name));
                }
            },
        });
        !get(fieldsRef.current, name) && set(fieldsRef.current, name, []);
        isMountedRef.current = true;
        return () => {
            fieldArraySubscription.unsubscribe();
            if (shouldUnmount || shouldUnregister) {
                unregister(name);
                unset(fieldArrayDefaultValuesRef.current, name);
            }
            else {
                const fieldArrayValues = get(getFieldsValues(fieldsRef), name);
                fieldArrayValues &&
                    set(fieldArrayDefaultValuesRef.current, name, fieldArrayValues);
            }
        };
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append$1, [name]),
        remove: React.useCallback(remove, [name]),
        insert: React.useCallback(insert$1, [name]),
        fields: fields,
    };
};

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(field) {
    if (field && field._f) {
        const ref = field._f.ref;
        if (ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field._f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field._f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? field._f.ref.value : ref.value, field._f);
    }
}

var getResolverOptions = (fieldsNames, fieldsRefs, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(fieldsRefs, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var hasValidation = (options, mounted) => mounted &&
    options &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var isFunction = (value) => typeof value === 'function';

var isString = (value) => typeof value === 'string';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async ({ _f: { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, value: inputValue, valueAsNumber, mount, }, }, validateAllFieldCriteria, shouldUseNativeValidation) => {
    if (!mount) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidty = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    setCustomValidty(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    setCustomValidty(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: inputRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidty(true);
    return error;
};

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isHTMLElement = (value) => value instanceof HTMLElement;

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

const isWindowUndefined = typeof window === 'undefined';
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUseNativeValidation, shouldUnregister, criteriaMode, } = {}) {
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    const readFormStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touchedFields: !isProxyEnabled,
        isValidating: !isProxyEnabled,
        isValid: !isProxyEnabled,
        errors: !isProxyEnabled,
    });
    const resolverRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(resolver);
    const formStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(formState);
    const fieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const defaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultValues);
    const fieldArrayDefaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(context);
    const inFieldArrayActionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const subjectsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        watch: new Subject(),
        control: new Subject(),
        array: new Subject(),
        state: new Subject(),
    });
    const namesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: false,
    });
    const validationMode = getValidationModes(mode);
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    resolverRef.current = resolver;
    contextRef.current = context;
    const isFieldWatched = (name) => namesRef.current.watchAll ||
        namesRef.current.watch.has(name) ||
        namesRef.current.watch.has((name.match(/\w+/) || [])[0]);
    const shouldRenderBaseOnError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (shouldSkipRender, name, error, inputState, isValidFromResolver, isWatched) => {
        const previousError = get(formStateRef.current.errors, name);
        const isValid = readFormStateRef.current.isValid
            ? resolver
                ? isValidFromResolver
                : await validateForm(fieldsRef.current, true)
            : false;
        error
            ? set(formStateRef.current.errors, name, error)
            : unset(formStateRef.current.errors, name);
        if ((isWatched ||
            (error ? !deepEqual(previousError, error, true) : previousError) ||
            !isEmptyObject(inputState) ||
            formStateRef.current.isValid !== isValid) &&
            !shouldSkipRender) {
            const updatedFormState = Object.assign(Object.assign({}, inputState), { isValid: !!isValid, errors: formStateRef.current.errors, name });
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), updatedFormState);
            subjectsRef.current.state.next(isWatched ? { name } : updatedFormState);
        }
        subjectsRef.current.state.next({
            isValidating: false,
        });
    }, []);
    const setFieldValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, rawValue, options = {}, shouldRender, shouldRegister) => {
        shouldRegister && register(name);
        const field = get(fieldsRef.current, name);
        if (field) {
            const _f = field._f;
            if (_f) {
                const value = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(rawValue)
                    ? ''
                    : rawValue;
                _f.value = getFieldValueAs(rawValue, _f);
                if (isRadioInput(_f.ref) && !_f._c) {
                    (_f.refs || []).forEach((radioRef) => (radioRef.checked = radioRef.value === value));
                }
                else if (isFileInput(_f.ref) && !isString(value) && !_f._c) {
                    _f.ref.files = value;
                }
                else if (isMultipleSelect(_f.ref)) {
                    [..._f.ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
                }
                else if (isCheckBoxInput(_f.ref) && _f.refs && !_f._c) {
                    _f.refs.length > 1
                        ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(value)
                            ? !!value.find((data) => data === checkboxRef.value)
                            : value === checkboxRef.value))
                        : (_f.refs[0].checked = !!value);
                }
                else {
                    _f.ref.value = value;
                }
                if (shouldRender && _f._c) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, name, rawValue);
                    subjectsRef.current.control.next({
                        values: Object.assign(Object.assign({}, defaultValuesRef.current), values),
                        name,
                    });
                }
                (options.shouldDirty || options.shouldTouch) &&
                    updateTouchAndDirtyState(name, value, options.shouldTouch);
                options.shouldValidate && trigger(name);
            }
            else {
                field._f = {
                    ref: {
                        name,
                        value: rawValue,
                    },
                    value: rawValue,
                };
            }
        }
    }, []);
    const getIsDirty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, data) => {
        const formValues = getFieldsValues(fieldsRef);
        name && data && set(formValues, name, data);
        return !deepEqual(formValues, defaultValuesRef.current);
    }, []);
    const updateTouchAndDirtyState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, inputValue, isCurrentTouched, shouldRender = true) => {
        const state = {
            name,
        };
        let isChanged = false;
        if (readFormStateRef.current.isDirty) {
            const previousIsDirty = formStateRef.current.isDirty;
            formStateRef.current.isDirty = getIsDirty();
            state.isDirty = formStateRef.current.isDirty;
            isChanged = previousIsDirty !== state.isDirty;
        }
        if (readFormStateRef.current.dirtyFields && !isCurrentTouched) {
            const isPreviousFieldDirty = get(formStateRef.current.dirtyFields, name);
            const isCurrentFieldDirty = !deepEqual(get(defaultValuesRef.current, name), inputValue);
            isCurrentFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            state.dirtyFields = formStateRef.current.dirtyFields;
            isChanged =
                isChanged ||
                    isPreviousFieldDirty !== get(formStateRef.current.dirtyFields, name);
        }
        const isPreviousFieldTouched = get(formStateRef.current.touchedFields, name);
        if (isCurrentTouched && !isPreviousFieldTouched) {
            set(formStateRef.current.touchedFields, name, isCurrentTouched);
            state.touchedFields = formStateRef.current.touchedFields;
            isChanged =
                isChanged ||
                    (readFormStateRef.current.touchedFields &&
                        isPreviousFieldTouched !== isCurrentTouched);
        }
        isChanged && shouldRender && subjectsRef.current.state.next(state);
        return isChanged ? state : {};
    }, []);
    const executeInlineValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, skipReRender) => {
        const error = (await validateField(get(fieldsRef.current, name), isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
        shouldRenderBaseOnError(skipReRender, name, error);
        return isUndefined(error);
    }, [isValidateAllFieldCriteria]);
    const executeResolverValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (names) => {
        const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
            }
        }
        else {
            formStateRef.current.errors = errors;
        }
        return errors;
    }, [criteriaMode, shouldUseNativeValidation]);
    const validateForm = async (fieldsRef, shouldCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fieldsRef) {
            const field = fieldsRef[name];
            if (field) {
                const _f = field._f;
                const current = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation);
                    if (shouldCheckValid) {
                        if (fieldError[_f.name]) {
                            context.valid = false;
                            break;
                        }
                    }
                    else {
                        fieldError[_f.name]
                            ? set(formStateRef.current.errors, _f.name, fieldError[_f.name])
                            : unset(formStateRef.current.errors, _f.name);
                    }
                }
                current && (await validateForm(current, shouldCheckValid, context));
            }
        }
        return context.valid;
    };
    const trigger = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, options = {}) => {
        const fieldNames = convertToArrayPayload(name);
        let isValid;
        subjectsRef.current.state.next({
            isValidating: true,
        });
        if (resolver) {
            const schemaResult = await executeResolverValidation(isUndefined(name) ? name : fieldNames);
            isValid = name
                ? fieldNames.every((name) => !get(schemaResult, name))
                : isEmptyObject(schemaResult);
        }
        else {
            if (name) {
                isValid = (await Promise.all(fieldNames
                    .filter((fieldName) => get(fieldsRef.current, fieldName, {})._f)
                    .map(async (fieldName) => await executeInlineValidation(fieldName, true)))).every(Boolean);
            }
            else {
                await validateForm(fieldsRef.current);
                isValid = isEmptyObject(formStateRef.current.errors);
            }
        }
        subjectsRef.current.state.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: formStateRef.current.errors, isValidating: false }));
        if (options.shouldFocus && !isValid) {
            focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), name ? fieldNames : namesRef.current.mount);
        }
        readFormStateRef.current.isValid && updateIsValid();
        return isValid;
    }, [executeResolverValidation, executeInlineValidation]);
    const updateIsValidAndInputValue = (name, ref) => {
        const field = get(fieldsRef.current, name);
        if (field) {
            const isValueUndefined = isUndefined(field._f.value);
            const defaultValue = isValueUndefined
                ? isUndefined(get(fieldArrayDefaultValuesRef.current, name))
                    ? get(defaultValuesRef.current, name)
                    : get(fieldArrayDefaultValuesRef.current, name)
                : field._f.value;
            if (!isUndefined(defaultValue)) {
                if (ref && ref.defaultChecked) {
                    field._f.value = getFieldValue(field);
                }
                else {
                    setFieldValue(name, defaultValue);
                }
            }
            else if (isValueUndefined) {
                field._f.value = getFieldValue(field);
            }
        }
        isMountedRef.current && readFormStateRef.current.isValid && updateIsValid();
    };
    const updateIsValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (values = {}) => {
        const isValid = resolver
            ? isEmptyObject((await resolverRef.current(Object.assign(Object.assign({}, getFieldsValues(fieldsRef)), values), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation))).errors)
            : await validateForm(fieldsRef.current, true);
        isValid !== formStateRef.current.isValid &&
            subjectsRef.current.state.next({
                isValid,
            });
    }, [criteriaMode, shouldUseNativeValidation]);
    const setInternalValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, value, options) => Object.entries(value).forEach(([fieldKey, fieldValue]) => {
        const fieldName = `${name}.${fieldKey}`;
        const field = get(fieldsRef.current, fieldName);
        const isFieldArray = namesRef.current.array.has(name);
        (isFieldArray || !isPrimitive(fieldValue) || (field && !field._f)) &&
            !isDateObject(fieldValue)
            ? setInternalValues(fieldName, fieldValue, options)
            : setFieldValue(fieldName, fieldValue, options, true, !field);
    }), [trigger]);
    const setValue = (name, value, options = {}) => {
        const field = get(fieldsRef.current, name);
        const isFieldArray = namesRef.current.array.has(name);
        if (isFieldArray) {
            subjectsRef.current.array.next({
                values: value,
                name,
                isReset: true,
            });
            if ((readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) &&
                options.shouldDirty) {
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                subjectsRef.current.state.next({
                    name,
                    dirtyFields: formStateRef.current.dirtyFields,
                    isDirty: getIsDirty(name, value),
                });
            }
            !value.length &&
                set(fieldsRef.current, name, []) &&
                set(fieldArrayDefaultValuesRef.current, name, []);
        }
        ((field && !field._f) || isFieldArray) && !isNullOrUndefined(value)
            ? setInternalValues(name, value, isFieldArray ? {} : options)
            : setFieldValue(name, value, options, true, !field);
        isFieldWatched(name) && subjectsRef.current.state.next({});
        subjectsRef.current.watch.next({ name, values: getValues() });
    };
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async ({ type, target, target: { value, type: inputType } }) => {
        let name = target.name;
        let error;
        let isValid;
        const field = get(fieldsRef.current, name);
        if (field) {
            let inputValue = inputType ? getFieldValue(field) : undefined;
            inputValue = isUndefined(inputValue) ? value : inputValue;
            const isBlurEvent = type === EVENTS.BLUR;
            const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = getValidationModes(reValidateMode);
            const shouldSkipValidation = (!hasValidation(field._f, field._f.mount) &&
                !resolver &&
                !get(formStateRef.current.errors, name)) ||
                skipValidation(Object.assign({ isBlurEvent, isTouched: !!get(formStateRef.current.touchedFields, name), isSubmitted: formStateRef.current.isSubmitted, isReValidateOnBlur,
                    isReValidateOnChange }, validationMode));
            const isWatched = !isBlurEvent && isFieldWatched(name);
            if (!isUndefined(inputValue)) {
                field._f.value = inputValue;
            }
            const inputState = updateTouchAndDirtyState(name, field._f.value, isBlurEvent, false);
            const shouldRender = !isEmptyObject(inputState) || isWatched;
            if (shouldSkipValidation) {
                !isBlurEvent &&
                    subjectsRef.current.watch.next({
                        name,
                        type,
                        values: getValues(),
                    });
                return (shouldRender &&
                    subjectsRef.current.state.next(isWatched ? { name } : Object.assign(Object.assign({}, inputState), { name })));
            }
            subjectsRef.current.state.next({
                isValidating: true,
            });
            if (resolver) {
                const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions([name], fieldsRef.current, criteriaMode, shouldUseNativeValidation));
                error = get(errors, name);
                if (isCheckBoxInput(target) && !error) {
                    const parentNodeName = getNodeParentName(name);
                    const currentError = get(errors, parentNodeName, {});
                    currentError.type && currentError.message && (error = currentError);
                    if (currentError ||
                        get(formStateRef.current.errors, parentNodeName)) {
                        name = parentNodeName;
                    }
                }
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
            }
            !isBlurEvent &&
                subjectsRef.current.watch.next({
                    name,
                    type,
                    values: getValues(),
                });
            shouldRenderBaseOnError(false, name, error, inputState, isValid, isWatched);
        }
    }, []);
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, defaultValuesRef.current), getFieldsValues(fieldsRef));
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(formStateRef.current.errors, inputName))
            : (formStateRef.current.errors = {});
        subjectsRef.current.state.next({
            errors: formStateRef.current.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = ((get(fieldsRef.current, name) || { _f: {} })._f || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        subjectsRef.current.state.next({
            name,
            errors: formStateRef.current.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watchInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((fieldNames, defaultValue, isGlobal, formValues) => {
        const isArrayNames = Array.isArray(fieldNames);
        const fieldValues = formValues || isMountedRef.current
            ? Object.assign(Object.assign({}, defaultValuesRef.current), (formValues || getFieldsValues(fieldsRef))) : isUndefined(defaultValue)
            ? defaultValuesRef.current
            : isArrayNames
                ? defaultValue
                : { [fieldNames]: defaultValue };
        if (isUndefined(fieldNames)) {
            isGlobal && (namesRef.current.watchAll = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of convertToArrayPayload(fieldNames)) {
            isGlobal && namesRef.current.watch.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return isArrayNames ? result : result[0];
    }, []);
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? subjectsRef.current.watch.subscribe({
            next: (info) => fieldName(watchInternal(undefined, defaultValue), info),
        })
        : watchInternal(fieldName, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name
            ? convertToArrayPayload(name)
            : namesRef.current.mount) {
            namesRef.current.mount.delete(inputName);
            namesRef.current.array.delete(inputName);
            if (get(fieldsRef.current, inputName)) {
                !options.keepError && unset(formStateRef.current.errors, inputName);
                !options.keepValue && unset(fieldsRef.current, inputName);
                !options.keepDirty &&
                    unset(formStateRef.current.dirtyFields, inputName);
                !options.keepTouched &&
                    unset(formStateRef.current.touchedFields, inputName);
                !shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(defaultValuesRef.current, inputName);
            }
        }
        subjectsRef.current.watch.next({
            values: getValues(),
        });
        subjectsRef.current.state.next(Object.assign(Object.assign({}, formStateRef.current), (!options.keepDirty ? {} : { isDirty: getIsDirty() })));
        !options.keepIsValid && updateIsValid();
    };
    const registerFieldRef = (name, ref, options) => {
        register(name, options);
        let field = get(fieldsRef.current, name);
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isRadioOrCheckbox &&
                compact(field._f.refs || []).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(fieldsRef.current, name, field);
        updateIsValidAndInputValue(name, ref);
    };
    const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, options = {}) => {
        const field = get(fieldsRef.current, name);
        set(fieldsRef.current, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (field && field._f ? field._f : { ref: { name } })), { name, mount: true }), options),
        });
        namesRef.current.mount.add(name);
        !field && updateIsValidAndInputValue(name);
        return isWindowUndefined
            ? { name: name }
            : {
                name,
                onChange: handleChange,
                onBlur: handleChange,
                ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(fieldsRef.current, name, {});
                        const shouldUnmount = shouldUnregister || options.shouldUnregister;
                        if (field._f) {
                            field._f.mount = false;
                            // If initial state of field element is disabled,
                            // value is not set on first "register"
                            // re-sync the value in when it switched to enabled
                            if (isUndefined(field._f.value)) {
                                field._f.value = field._f.ref.value;
                            }
                        }
                        shouldUnmount &&
                            !(isNameInFieldArray(namesRef.current.array, name) &&
                                inFieldArrayActionRef.current) &&
                            namesRef.current.unMount.add(name);
                    }
                },
            };
    }, []);
    const handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = getFieldsValues(fieldsRef);
        subjectsRef.current.state.next({
            isSubmitting: true,
        });
        try {
            if (resolver) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
                formStateRef.current.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(fieldsRef.current);
            }
            if (isEmptyObject(formStateRef.current.errors) &&
                Object.keys(formStateRef.current.errors).every((name) => get(fieldValues, name))) {
                subjectsRef.current.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), namesRef.current.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            formStateRef.current.isSubmitted = true;
            subjectsRef.current.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors) && hasNoPromiseError,
                submitCount: formStateRef.current.submitCount + 1,
                errors: formStateRef.current.errors,
            });
        }
    }, [
        shouldFocusError,
        isValidateAllFieldCriteria,
        criteriaMode,
        shouldUseNativeValidation,
    ]);
    const registerAbsentFields = (defaultValues, name = '') => {
        for (const key in defaultValues) {
            const value = defaultValues[key];
            const fieldName = name + (name ? '.' : '') + key;
            const field = get(fieldsRef.current, fieldName);
            if (!field || !field._f) {
                if (isObject(value) || Array.isArray(value)) {
                    registerAbsentFields(value, fieldName);
                }
                else if (!field) {
                    register(fieldName, { value });
                }
            }
        }
    };
    const reset = (values, keepStateOptions = {}) => {
        const updatedValues = values || defaultValuesRef.current;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of namesRef.current.mount) {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    try {
                        isHTMLElement(inputRef) && inputRef.closest('form').reset();
                        break;
                    }
                    catch (_a) { }
                }
            }
        }
        !keepStateOptions.keepDefaultValues &&
            (defaultValuesRef.current = Object.assign({}, updatedValues));
        if (!keepStateOptions.keepValues) {
            fieldsRef.current = {};
            subjectsRef.current.control.next({
                values: keepStateOptions.keepDefaultValues
                    ? defaultValuesRef.current
                    : Object.assign({}, updatedValues),
            });
            subjectsRef.current.watch.next({
                values: Object.assign({}, updatedValues),
            });
            subjectsRef.current.array.next({
                values: Object.assign({}, updatedValues),
                isReset: true,
            });
        }
        namesRef.current = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
        };
        subjectsRef.current.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? formStateRef.current.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? formStateRef.current.isDirty
                : keepStateOptions.keepDefaultValues
                    ? deepEqual(values, defaultValuesRef.current)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? formStateRef.current.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? formStateRef.current.dirtyFields
                : {},
            touchedFields: keepStateOptions.keepTouched
                ? formStateRef.current.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
        isMountedRef.current = !!keepStateOptions.keepIsValid;
    };
    const setFocus = (name) => get(fieldsRef.current, name)._f.ref.focus();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, readFormStateRef.current, true)) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), formState);
                    updateFormState(formStateRef.current);
                }
            },
        });
        const useFieldArraySubscription = subjectsRef.current.array.subscribe({
            next(state) {
                if (state.values && state.name && readFormStateRef.current.isValid) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, state.name, state.values);
                    updateIsValid(values);
                }
            },
        });
        return () => {
            formStateSubscription.unsubscribe();
            useFieldArraySubscription.unsubscribe();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const unregisterFieldNames = [];
        const isLiveInDom = (ref) => !isHTMLElement(ref) || !document.contains(ref);
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            readFormStateRef.current.isValid && updateIsValid();
            !shouldUnregister && registerAbsentFields(defaultValuesRef.current);
        }
        for (const name of namesRef.current.unMount) {
            const field = get(fieldsRef.current, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every(isLiveInDom)
                    : isLiveInDom(field._f.ref)) &&
                unregisterFieldNames.push(name);
        }
        unregisterFieldNames.length &&
            unregister(unregisterFieldNames);
        namesRef.current.unMount = new Set();
    });
    return {
        control: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
            register,
            inFieldArrayActionRef,
            getIsDirty,
            subjectsRef,
            watchInternal,
            fieldsRef,
            updateIsValid,
            namesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            fieldArrayDefaultValuesRef,
            unregister,
            shouldUnmount: shouldUnregister,
        }), []),
        formState: getProxyFormState(isProxyEnabled, formState, readFormStateRef),
        trigger,
        register,
        handleSubmit,
        watch: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(watch, []),
        setValue: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setValue, [setInternalValues]),
        getValues: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(getValues, []),
        reset: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(reset, []),
        clearErrors: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(clearErrors, []),
        unregister: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(unregister, []),
        setError: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setError, []),
        setFocus: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setFocus, []),
    };
}

function useWatch(props) {
    const { control, name, defaultValue } = props || {};
    const methods = useFormContext();
    const nameRef = React.useRef(name);
    nameRef.current = name;
    const { watchInternal, subjectsRef } = control || methods.control;
    const [value, updateValue] = React.useState(isUndefined(defaultValue)
        ? watchInternal(name)
        : defaultValue);
    React.useEffect(() => {
        watchInternal(name);
        const watchSubscription = subjectsRef.current.watch.subscribe({
            next: ({ name: inputName, values }) => (!nameRef.current ||
                !inputName ||
                convertToArrayPayload(nameRef.current).some((fieldName) => inputName &&
                    fieldName &&
                    (fieldName.startsWith(inputName) ||
                        inputName.startsWith(fieldName)))) &&
                updateValue(watchInternal(nameRef.current, defaultValue, false, values)),
        });
        return () => watchSubscription.unsubscribe();
    }, []);
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 53898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ Controller),
/* harmony export */   "RV": () => (/* binding */ FormProvider),
/* harmony export */   "KN": () => (/* binding */ appendErrors),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "t8": () => (/* binding */ set),
/* harmony export */   "cI": () => (/* binding */ useForm),
/* harmony export */   "Gc": () => (/* binding */ useFormContext)
/* harmony export */ });
/* unused harmony exports useController, useFieldArray, useFormState, useWatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (data) => data instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (isObject(obj) && path) {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    }
    return undefined;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormContext);
const FormProvider = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (isProxyEnabled, formState, readFormStateRef, localReadFormStateRef, isRoot = true) => isProxyEnabled
    ? new Proxy(formState, {
        get: (obj, prop) => {
            if (prop in obj) {
                if (readFormStateRef.current[prop] !== VALIDATION_MODE.all) {
                    readFormStateRef.current[prop] = isRoot
                        ? VALIDATION_MODE.all
                        : true;
                }
                localReadFormStateRef &&
                    (localReadFormStateRef.current[prop] = true);
                return obj[prop];
            }
            return undefined;
        },
    })
    : formState;

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, readFormStateRef, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(readFormStateRef).length ||
        Object.keys(formState).find((key) => readFormStateRef[key] ===
            (isRoot ? VALIDATION_MODE.all : true)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== 'undefined';

function useFormState(props) {
    const { control, name } = props || {};
    const methods = useFormContext();
    const { formStateRef, subjectsRef, readFormStateRef } = control || methods.control;
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    nameRef.current = name;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(formStateRef.current);
    const readFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, readFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, formStateRef.current), formState)),
        });
        return () => formStateSubscription.unsubscribe();
    }, []);
    return getProxyFormState(isProxyEnabled, formState, readFormStateRef, readFormState, false);
}

function useController({ name, rules, defaultValue, control, shouldUnregister, }) {
    const methods = useFormContext();
    const { defaultValuesRef, register, fieldsRef, unregister, namesRef, subjectsRef, shouldUnmount, inFieldArrayActionRef, } = control || methods.control;
    const field = get(fieldsRef.current, name);
    const [value, setInputStateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(field && field._f && !isUndefined(field._f.value)
        ? field._f.value
        : isUndefined(get(defaultValuesRef.current, name))
            ? defaultValue
            : get(defaultValuesRef.current, name));
    const { onChange, onBlur, ref } = register(name, Object.assign(Object.assign({}, rules), { value }));
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const controllerSubscription = subjectsRef.current.control.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        get(fieldsRef.current, name)._f.mount = true;
        return () => {
            controllerSubscription.unsubscribe();
            const shouldUnmountField = shouldUnmount || shouldUnregister;
            if (isNameInFieldArray(namesRef.current.array, name)
                ? shouldUnmountField && !inFieldArrayActionRef.current
                : shouldUnmountField) {
                unregister(name);
            }
            else {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    field._f.mount = false;
                }
            }
        };
    }, [name]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                onBlur({
                    target: {
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => elm &&
                ref({
                    focus: () => elm.focus && elm.focus(),
                    setCustomValidity: (message) => elm.setCustomValidity(message),
                    reportValidity: () => elm.reportValidity(),
                }),
        },
        formState,
        fieldState: {
            invalid: !!get(formState.errors, name),
            isDirty: !!get(formState.dirtyFields, name),
            isTouched: !!get(formState.touchedFields, name),
            error: get(formState.errors, name),
        },
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

const getFieldsValues = (fieldsRef, output = {}) => {
    for (const name in fieldsRef.current) {
        const field = fieldsRef.current[name];
        if (field && !isNullOrUndefined(output)) {
            const _f = field._f;
            const current = omit(field, '_f');
            set(output, name, _f && _f.ref
                ? _f.ref.disabled || (_f.refs && _f.refs.every((ref) => ref.disabled))
                    ? undefined
                    : _f.value
                : Array.isArray(field)
                    ? []
                    : {});
            current &&
                getFieldsValues({
                    current,
                }, output[name]);
        }
    }
    return output;
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign({ [keyName]: (value && value[keyName]) || generateId() }, value)));

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        isDateObject(object1) ||
        isDateObject(object2)) {
        return object1 === object2;
    }
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                !isNullOrUndefined(defaultValues) &&
                    deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

function append(data, value) {
    return [...convertToArrayPayload(data), ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const useFieldArray = ({ control, name, keyName = 'id', shouldUnregister, }) => {
    const methods = useFormContext();
    const focusNameRef = React.useRef('');
    const isMountedRef = React.useRef(false);
    const { getIsDirty, namesRef, fieldsRef, defaultValuesRef, formStateRef, subjectsRef, readFormStateRef, updateIsValid, fieldArrayDefaultValuesRef, unregister, shouldUnmount, inFieldArrayActionRef, setValues, register, } = control || methods.control;
    const [fields, setFields] = React.useState(mapIds((get(fieldsRef.current, name) && isMountedRef.current
        ? get(getFieldsValues(fieldsRef), name)
        : get(fieldArrayDefaultValuesRef.current, getNodeParentName(name))
            ? get(fieldArrayDefaultValuesRef.current, name)
            : get(defaultValuesRef.current, name)) || [], keyName));
    set(fieldArrayDefaultValuesRef.current, name, [...fields]);
    namesRef.current.array.add(name);
    const omitKey = (fields) => fields.map((field = {}) => omit(field, keyName));
    const getCurrentFieldsValues = () => {
        const values = get(getFieldsValues(fieldsRef), name, []);
        return mapIds(get(fieldArrayDefaultValuesRef.current, name, []).map((item, index) => (Object.assign(Object.assign({}, item), values[index]))), keyName);
    };
    const getFocusFieldName = (index, options) => options && !options.shouldFocus
        ? options.focusName || `${name}.${options.focusIndex}.`
        : `${name}.${index}.`;
    const setFieldsAndNotify = (fieldsValues = []) => setFields(mapIds(fieldsValues, keyName));
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const batchStateUpdate = (method, args, updatedFieldArrayValues = [], shouldSet = true) => {
        inFieldArrayActionRef.current = true;
        if (get(fieldsRef.current, name)) {
            const output = method(get(fieldsRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldsRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touchedFields &&
            get(formStateRef.current.touchedFields, name)) {
            const output = method(get(formStateRef.current.touchedFields, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touchedFields, name, output);
            cleanup(formStateRef.current.touchedFields);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updatedFieldArrayValues &&
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            cleanup(formStateRef.current.dirtyFields);
        }
        subjectsRef.current.state.next({
            dirtyFields: formStateRef.current
                .dirtyFields,
            isDirty: getIsDirty(name, omitKey(updatedFieldArrayValues)),
            errors: formStateRef.current.errors,
            isValid: formStateRef.current.isValid,
        });
    };
    const registerFieldArray = (values, index = 0, parentName = '') => values.forEach((appendValueItem, valueIndex) => {
        const rootName = `${parentName || name}.${parentName ? valueIndex : index + valueIndex}`;
        isPrimitive(appendValueItem)
            ? register(rootName, {
                value: appendValueItem,
            })
            : Object.entries(appendValueItem).forEach(([key, value]) => {
                const inputName = rootName + '.' + key;
                Array.isArray(value)
                    ? registerFieldArray(value, valueIndex, inputName)
                    : register(inputName, { value });
            });
    });
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = append(getCurrentFieldsValues(), appendValue);
        const currentIndex = updatedFieldArrayValues.length - appendValue.length;
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues, false);
        registerFieldArray(appendValue, currentIndex);
        focusNameRef.current = getFocusFieldName(currentIndex, options);
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), prependValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(prependValue);
        focusNameRef.current = getFocusFieldName(0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(getCurrentFieldsValues(), index);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValues);
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = insert(getCurrentFieldsValues(), index, insertValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(insertValue, index);
        focusNameRef.current = getFocusFieldName(index, options);
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, fieldValues, false);
        setFieldsAndNotify(fieldValues);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        setFieldsAndNotify(fieldValues);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
        }, fieldValues, false);
    };
    const update = (index, value) => {
        setValues((name + '.' + index), value, {
            shouldValidate: !!readFormStateRef.current.isValid,
            shouldDirty: !!(readFormStateRef.current.dirtyFields ||
                readFormStateRef.current.isDirty),
        });
        const fieldValues = getCurrentFieldsValues();
        fieldValues[index] = value;
        setFieldsAndNotify(fieldValues);
    };
    React.useEffect(() => {
        inFieldArrayActionRef.current = false;
        if (namesRef.current.watchAll) {
            subjectsRef.current.state.next({});
        }
        else {
            for (const watchField of namesRef.current.watch) {
                if (name.startsWith(watchField)) {
                    subjectsRef.current.state.next({});
                    break;
                }
            }
        }
        subjectsRef.current.watch.next({
            name,
            values: getFieldsValues(fieldsRef),
        });
        focusNameRef.current &&
            focusFieldBy(fieldsRef.current, (key) => key.startsWith(focusNameRef.current));
        focusNameRef.current = '';
        subjectsRef.current.array.next({
            name,
            values: omitKey([...fields]),
        });
        readFormStateRef.current.isValid && updateIsValid();
    }, [fields, name]);
    React.useEffect(() => {
        const fieldArraySubscription = subjectsRef.current.array.subscribe({
            next({ name: inputFieldArrayName, values, isReset }) {
                if (isReset) {
                    unset(fieldsRef.current, inputFieldArrayName || name);
                    inputFieldArrayName
                        ? set(fieldArrayDefaultValuesRef.current, inputFieldArrayName, values)
                        : (fieldArrayDefaultValuesRef.current = values);
                    setFieldsAndNotify(get(fieldArrayDefaultValuesRef.current, name));
                }
            },
        });
        !get(fieldsRef.current, name) && set(fieldsRef.current, name, []);
        isMountedRef.current = true;
        return () => {
            fieldArraySubscription.unsubscribe();
            if (shouldUnmount || shouldUnregister) {
                unregister(name);
                unset(fieldArrayDefaultValuesRef.current, name);
            }
            else {
                const fieldArrayValues = get(getFieldsValues(fieldsRef), name);
                fieldArrayValues &&
                    set(fieldArrayDefaultValuesRef.current, name, fieldArrayValues);
            }
        };
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append$1, [name]),
        remove: React.useCallback(remove, [name]),
        insert: React.useCallback(insert$1, [name]),
        update: React.useCallback(update, [name]),
        fields: fields,
    };
};

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(field) {
    if (field && field._f) {
        const ref = field._f.ref;
        if (ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field._f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field._f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? field._f.ref.value : ref.value, field._f);
    }
}

var getResolverOptions = (fieldsNames, fieldsRefs, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(fieldsRefs, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var hasValidation = (options, mounted) => mounted &&
    options &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var isFunction = (value) => typeof value === 'function';

var isString = (value) => typeof value === 'string';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async ({ _f: { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, value: inputValue, valueAsNumber, mount, }, }, validateAllFieldCriteria, shouldUseNativeValidation) => {
    if (!mount) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidty = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    setCustomValidty(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    setCustomValidty(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: inputRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidty(true);
    return error;
};

var debounce = (callback, wait) => {
    let timer = 0;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), wait);
    };
};

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isHTMLElement = (value) => value instanceof HTMLElement;

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

const isWindowUndefined = typeof window === 'undefined';
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, delayError, shouldUseNativeValidation, shouldUnregister, criteriaMode, } = {}) {
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    const readFormStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touchedFields: !isProxyEnabled,
        isValidating: !isProxyEnabled,
        isValid: !isProxyEnabled,
        errors: !isProxyEnabled,
    });
    const resolverRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(resolver);
    const formStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(formState);
    const fieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const defaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultValues);
    const fieldArrayDefaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(context);
    const inFieldArrayActionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const _delayCallback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const subjectsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        watch: new Subject(),
        control: new Subject(),
        array: new Subject(),
        state: new Subject(),
    });
    const namesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: false,
    });
    const validationMode = getValidationModes(mode);
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    resolverRef.current = resolver;
    contextRef.current = context;
    const isFieldWatched = (name) => namesRef.current.watchAll ||
        namesRef.current.watch.has(name) ||
        namesRef.current.watch.has((name.match(/\w+/) || [])[0]);
    const shouldRenderBaseOnError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (shouldSkipRender, name, error, fieldState, isValidFromResolver, isWatched) => {
        const previousError = get(formStateRef.current.errors, name);
        const isValid = readFormStateRef.current.isValid
            ? resolver
                ? isValidFromResolver
                : await validateForm(fieldsRef.current, true)
            : false;
        error
            ? set(formStateRef.current.errors, name, error)
            : unset(formStateRef.current.errors, name);
        if ((isWatched ||
            (error ? !deepEqual(previousError, error, true) : previousError) ||
            !isEmptyObject(fieldState) ||
            formStateRef.current.isValid !== isValid) &&
            !shouldSkipRender) {
            const updatedFormState = Object.assign(Object.assign({}, fieldState), { isValid: !!isValid, errors: formStateRef.current.errors, name });
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), updatedFormState);
            subjectsRef.current.state.next(isWatched ? { name } : updatedFormState);
        }
        subjectsRef.current.state.next({
            isValidating: false,
        });
    }, []);
    const setFieldValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, rawValue, options = {}, shouldRender, shouldRegister) => {
        shouldRegister && register(name);
        const field = get(fieldsRef.current, name);
        if (field) {
            const _f = field._f;
            if (_f) {
                const value = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(rawValue)
                    ? ''
                    : rawValue;
                _f.value = getFieldValueAs(rawValue, _f);
                if (isRadioInput(_f.ref)) {
                    (_f.refs || []).forEach((radioRef) => (radioRef.checked = radioRef.value === value));
                }
                else if (isFileInput(_f.ref) && !isString(value)) {
                    _f.ref.files = value;
                }
                else if (isMultipleSelect(_f.ref)) {
                    [..._f.ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
                }
                else if (isCheckBoxInput(_f.ref) && _f.refs) {
                    _f.refs.length > 1
                        ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(value)
                            ? !!value.find((data) => data === checkboxRef.value)
                            : value === checkboxRef.value))
                        : (_f.refs[0].checked = !!value);
                }
                else {
                    _f.ref.value = value;
                }
                if (shouldRender) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, name, rawValue);
                    subjectsRef.current.control.next({
                        values: Object.assign(Object.assign({}, defaultValuesRef.current), values),
                        name,
                    });
                }
                (options.shouldDirty || options.shouldTouch) &&
                    updateTouchAndDirtyState(name, value, options.shouldTouch);
                options.shouldValidate && trigger(name);
            }
            else {
                field._f = {
                    ref: {
                        name,
                        value: rawValue,
                    },
                    value: rawValue,
                };
            }
        }
    }, []);
    const getIsDirty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, data) => {
        const formValues = getFieldsValues(fieldsRef);
        name && data && set(formValues, name, data);
        return !deepEqual(formValues, defaultValuesRef.current);
    }, []);
    const updateTouchAndDirtyState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, inputValue, isCurrentTouched, shouldRender = true) => {
        const state = {
            name,
        };
        let isChanged = false;
        if (readFormStateRef.current.isDirty) {
            const previousIsDirty = formStateRef.current.isDirty;
            formStateRef.current.isDirty = getIsDirty();
            state.isDirty = formStateRef.current.isDirty;
            isChanged = previousIsDirty !== state.isDirty;
        }
        if (readFormStateRef.current.dirtyFields && !isCurrentTouched) {
            const isPreviousFieldDirty = get(formStateRef.current.dirtyFields, name);
            const isCurrentFieldDirty = !deepEqual(get(defaultValuesRef.current, name), inputValue);
            isCurrentFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            state.dirtyFields = formStateRef.current.dirtyFields;
            isChanged =
                isChanged ||
                    isPreviousFieldDirty !== get(formStateRef.current.dirtyFields, name);
        }
        const isPreviousFieldTouched = get(formStateRef.current.touchedFields, name);
        if (isCurrentTouched && !isPreviousFieldTouched) {
            set(formStateRef.current.touchedFields, name, isCurrentTouched);
            state.touchedFields = formStateRef.current.touchedFields;
            isChanged =
                isChanged ||
                    (readFormStateRef.current.touchedFields &&
                        isPreviousFieldTouched !== isCurrentTouched);
        }
        isChanged && shouldRender && subjectsRef.current.state.next(state);
        return isChanged ? state : {};
    }, []);
    const executeInlineValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, skipReRender) => {
        const error = (await validateField(get(fieldsRef.current, name), isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
        await shouldRenderBaseOnError(skipReRender, name, error);
        return isUndefined(error);
    }, [isValidateAllFieldCriteria]);
    const executeResolverValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (names) => {
        const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
            }
        }
        else {
            formStateRef.current.errors = errors;
        }
        return errors;
    }, [criteriaMode, shouldUseNativeValidation]);
    const validateForm = async (fieldsRef, shouldCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fieldsRef) {
            const field = fieldsRef[name];
            if (field) {
                const _f = field._f;
                const current = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation);
                    if (shouldCheckValid) {
                        if (fieldError[_f.name]) {
                            context.valid = false;
                            break;
                        }
                    }
                    else {
                        fieldError[_f.name]
                            ? set(formStateRef.current.errors, _f.name, fieldError[_f.name])
                            : unset(formStateRef.current.errors, _f.name);
                    }
                }
                current && (await validateForm(current, shouldCheckValid, context));
            }
        }
        return context.valid;
    };
    const trigger = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, options = {}) => {
        const fieldNames = convertToArrayPayload(name);
        let isValid;
        subjectsRef.current.state.next({
            isValidating: true,
        });
        if (resolver) {
            const schemaResult = await executeResolverValidation(isUndefined(name) ? name : fieldNames);
            isValid = name
                ? fieldNames.every((name) => !get(schemaResult, name))
                : isEmptyObject(schemaResult);
        }
        else {
            if (name) {
                isValid = (await Promise.all(fieldNames
                    .filter((fieldName) => get(fieldsRef.current, fieldName, {})._f)
                    .map(async (fieldName) => await executeInlineValidation(fieldName, true)))).every(Boolean);
            }
            else {
                await validateForm(fieldsRef.current);
                isValid = isEmptyObject(formStateRef.current.errors);
            }
        }
        subjectsRef.current.state.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: formStateRef.current.errors, isValidating: false }));
        if (options.shouldFocus && !isValid) {
            focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), name ? fieldNames : namesRef.current.mount);
        }
        readFormStateRef.current.isValid && updateIsValid();
        return isValid;
    }, [executeResolverValidation, executeInlineValidation]);
    const updateIsValidAndInputValue = (name, ref) => {
        const field = get(fieldsRef.current, name);
        if (field) {
            const isValueUndefined = isUndefined(field._f.value);
            const defaultValue = isValueUndefined
                ? isUndefined(get(fieldArrayDefaultValuesRef.current, name))
                    ? get(defaultValuesRef.current, name)
                    : get(fieldArrayDefaultValuesRef.current, name)
                : field._f.value;
            if (!isUndefined(defaultValue)) {
                if (ref && ref.defaultChecked) {
                    field._f.value = getFieldValue(field);
                }
                else {
                    setFieldValue(name, defaultValue);
                }
            }
            else if (isValueUndefined) {
                field._f.value = getFieldValue(field);
            }
        }
        isMountedRef.current && readFormStateRef.current.isValid && updateIsValid();
    };
    const updateIsValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (values = {}) => {
        const isValid = resolver
            ? isEmptyObject((await resolverRef.current(Object.assign(Object.assign({}, getFieldsValues(fieldsRef)), values), contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation))).errors)
            : await validateForm(fieldsRef.current, true);
        if (isValid !== formStateRef.current.isValid) {
            formStateRef.current.isValid = isValid;
            subjectsRef.current.state.next({
                isValid,
            });
        }
    }, [criteriaMode, shouldUseNativeValidation]);
    const setValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, value, options) => Object.entries(value).forEach(([fieldKey, fieldValue]) => {
        const fieldName = `${name}.${fieldKey}`;
        const field = get(fieldsRef.current, fieldName);
        const isFieldArray = namesRef.current.array.has(name);
        (isFieldArray || !isPrimitive(fieldValue) || (field && !field._f)) &&
            !isDateObject(fieldValue)
            ? setValues(fieldName, fieldValue, options)
            : setFieldValue(fieldName, fieldValue, options, true, !field);
    }), [trigger]);
    const setValue = (name, value, options = {}) => {
        const field = get(fieldsRef.current, name);
        const isFieldArray = namesRef.current.array.has(name);
        if (isFieldArray) {
            subjectsRef.current.array.next({
                values: value,
                name,
                isReset: true,
            });
            if ((readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) &&
                options.shouldDirty) {
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                subjectsRef.current.state.next({
                    name,
                    dirtyFields: formStateRef.current.dirtyFields,
                    isDirty: getIsDirty(name, value),
                });
            }
            !value.length &&
                set(fieldsRef.current, name, []) &&
                set(fieldArrayDefaultValuesRef.current, name, []);
        }
        ((field && !field._f) || isFieldArray) && !isNullOrUndefined(value)
            ? setValues(name, value, isFieldArray ? {} : options)
            : setFieldValue(name, value, options, true, !field);
        isFieldWatched(name) && subjectsRef.current.state.next({});
        subjectsRef.current.watch.next({ name, values: getValues() });
    };
    const handleValidate = async (target, fieldState, isWatched, isBlurEvent) => {
        let error;
        let isValid;
        let name = target.name;
        const field = get(fieldsRef.current, name);
        if (resolver) {
            const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, getResolverOptions([name], fieldsRef.current, criteriaMode, shouldUseNativeValidation));
            error = get(errors, name);
            if (isCheckBoxInput(target) && !error) {
                const parentNodeName = getNodeParentName(name);
                const currentError = get(errors, parentNodeName, {});
                currentError.type && currentError.message && (error = currentError);
                if (currentError || get(formStateRef.current.errors, parentNodeName)) {
                    name = parentNodeName;
                }
            }
            isValid = isEmptyObject(errors);
        }
        else {
            error = (await validateField(field, isValidateAllFieldCriteria, shouldUseNativeValidation))[name];
        }
        !isBlurEvent &&
            subjectsRef.current.watch.next({
                name,
                type: target.type,
                values: getValues(),
            });
        shouldRenderBaseOnError(false, name, error, fieldState, isValid, isWatched);
    };
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async ({ type, target, target: { value, name, type: inputType } }) => {
        const field = get(fieldsRef.current, name);
        if (field) {
            let inputValue = inputType ? getFieldValue(field) : undefined;
            inputValue = isUndefined(inputValue) ? value : inputValue;
            const isBlurEvent = type === EVENTS.BLUR;
            const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = getValidationModes(reValidateMode);
            const shouldSkipValidation = (!hasValidation(field._f, field._f.mount) &&
                !resolver &&
                !get(formStateRef.current.errors, name)) ||
                skipValidation(Object.assign({ isBlurEvent, isTouched: !!get(formStateRef.current.touchedFields, name), isSubmitted: formStateRef.current.isSubmitted, isReValidateOnBlur,
                    isReValidateOnChange }, validationMode));
            const isWatched = !isBlurEvent && isFieldWatched(name);
            if (!isUndefined(inputValue)) {
                field._f.value = inputValue;
            }
            const fieldState = updateTouchAndDirtyState(name, field._f.value, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || isWatched;
            if (shouldSkipValidation) {
                !isBlurEvent &&
                    subjectsRef.current.watch.next({
                        name,
                        type,
                        values: getValues(),
                    });
                return (shouldRender &&
                    subjectsRef.current.state.next(isWatched ? { name } : Object.assign(Object.assign({}, fieldState), { name })));
            }
            subjectsRef.current.state.next({
                isValidating: true,
            });
            if (get(formStateRef.current.errors, name) || !delayError) {
                handleValidate(target, fieldState, isWatched, isBlurEvent);
            }
            else {
                _delayCallback.current =
                    _delayCallback.current || debounce(handleValidate, delayError);
                _delayCallback.current(target, fieldState, isWatched, isBlurEvent);
                isWatched && subjectsRef.current.state.next({ name });
            }
        }
    }, []);
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, defaultValuesRef.current), getFieldsValues(fieldsRef));
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(formStateRef.current.errors, inputName))
            : (formStateRef.current.errors = {});
        subjectsRef.current.state.next({
            errors: formStateRef.current.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = ((get(fieldsRef.current, name) || { _f: {} })._f || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        subjectsRef.current.state.next({
            name,
            errors: formStateRef.current.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watchInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((fieldNames, defaultValue, isGlobal, formValues) => {
        const isArrayNames = Array.isArray(fieldNames);
        const fieldValues = formValues || isMountedRef.current
            ? Object.assign(Object.assign({}, defaultValuesRef.current), (formValues || getFieldsValues(fieldsRef))) : isUndefined(defaultValue)
            ? defaultValuesRef.current
            : isArrayNames
                ? defaultValue
                : { [fieldNames]: defaultValue };
        if (isUndefined(fieldNames)) {
            isGlobal && (namesRef.current.watchAll = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of convertToArrayPayload(fieldNames)) {
            isGlobal && namesRef.current.watch.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return isArrayNames ? result : result[0];
    }, []);
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? subjectsRef.current.watch.subscribe({
            next: (info) => fieldName(watchInternal(undefined, defaultValue), info),
        })
        : watchInternal(fieldName, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name
            ? convertToArrayPayload(name)
            : namesRef.current.mount) {
            namesRef.current.mount.delete(inputName);
            namesRef.current.array.delete(inputName);
            if (get(fieldsRef.current, inputName)) {
                !options.keepError && unset(formStateRef.current.errors, inputName);
                !options.keepValue && unset(fieldsRef.current, inputName);
                !options.keepDirty &&
                    unset(formStateRef.current.dirtyFields, inputName);
                !options.keepTouched &&
                    unset(formStateRef.current.touchedFields, inputName);
                !shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(defaultValuesRef.current, inputName);
            }
        }
        subjectsRef.current.watch.next({
            values: getValues(),
        });
        subjectsRef.current.state.next(Object.assign(Object.assign({}, formStateRef.current), (!options.keepDirty ? {} : { isDirty: getIsDirty() })));
        !options.keepIsValid && updateIsValid();
    };
    const registerFieldRef = (name, ref, options) => {
        register(name, options);
        let field = get(fieldsRef.current, name);
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isRadioOrCheckbox &&
                compact(field._f.refs || []).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(fieldsRef.current, name, field);
        updateIsValidAndInputValue(name, ref);
    };
    const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, options = {}) => {
        const field = get(fieldsRef.current, name);
        set(fieldsRef.current, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (field && field._f ? field._f : { ref: { name } })), { name, mount: true }), options),
        });
        namesRef.current.mount.add(name);
        !field && updateIsValidAndInputValue(name);
        return isWindowUndefined
            ? { name: name }
            : {
                name,
                onChange: handleChange,
                onBlur: handleChange,
                ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(fieldsRef.current, name, {});
                        const shouldUnmount = shouldUnregister || options.shouldUnregister;
                        if (field._f) {
                            field._f.mount = false;
                            // If initial state of field element is disabled,
                            // value is not set on first "register"
                            // re-sync the value in when it switched to enabled
                            if (isUndefined(field._f.value)) {
                                field._f.value = field._f.ref.value;
                            }
                        }
                        shouldUnmount &&
                            !(isNameInFieldArray(namesRef.current.array, name) &&
                                inFieldArrayActionRef.current) &&
                            namesRef.current.unMount.add(name);
                    }
                },
            };
    }, []);
    const handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = getFieldsValues(fieldsRef);
        subjectsRef.current.state.next({
            isSubmitting: true,
        });
        try {
            if (resolver) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, getResolverOptions(namesRef.current.mount, fieldsRef.current, criteriaMode, shouldUseNativeValidation));
                formStateRef.current.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(fieldsRef.current);
            }
            if (isEmptyObject(formStateRef.current.errors) &&
                Object.keys(formStateRef.current.errors).every((name) => get(fieldValues, name))) {
                subjectsRef.current.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), namesRef.current.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            formStateRef.current.isSubmitted = true;
            subjectsRef.current.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors) && hasNoPromiseError,
                submitCount: formStateRef.current.submitCount + 1,
                errors: formStateRef.current.errors,
            });
        }
    }, [
        shouldFocusError,
        isValidateAllFieldCriteria,
        criteriaMode,
        shouldUseNativeValidation,
    ]);
    const registerAbsentFields = (defaultValues, name = '') => {
        for (const key in defaultValues) {
            const value = defaultValues[key];
            const fieldName = name + (name ? '.' : '') + key;
            const field = get(fieldsRef.current, fieldName);
            if (!field || !field._f) {
                if (isObject(value) || Array.isArray(value)) {
                    registerAbsentFields(value, fieldName);
                }
                else if (!field) {
                    register(fieldName, { value });
                }
            }
        }
    };
    const reset = (values, keepStateOptions = {}) => {
        const updatedValues = values || defaultValuesRef.current;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of namesRef.current.mount) {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    try {
                        isHTMLElement(inputRef) && inputRef.closest('form').reset();
                        break;
                    }
                    catch (_a) { }
                }
            }
        }
        if (!keepStateOptions.keepDefaultValues) {
            defaultValuesRef.current = Object.assign({}, updatedValues);
            fieldArrayDefaultValuesRef.current = Object.assign({}, updatedValues);
        }
        if (!keepStateOptions.keepValues) {
            fieldsRef.current = {};
            subjectsRef.current.control.next({
                values: keepStateOptions.keepDefaultValues
                    ? defaultValuesRef.current
                    : Object.assign({}, updatedValues),
            });
            subjectsRef.current.watch.next({
                values: Object.assign({}, updatedValues),
            });
            subjectsRef.current.array.next({
                values: Object.assign({}, updatedValues),
                isReset: true,
            });
        }
        namesRef.current = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
        };
        subjectsRef.current.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? formStateRef.current.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? formStateRef.current.isDirty
                : keepStateOptions.keepDefaultValues
                    ? deepEqual(values, defaultValuesRef.current)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? formStateRef.current.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? formStateRef.current.dirtyFields
                : {},
            touchedFields: keepStateOptions.keepTouched
                ? formStateRef.current.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
        isMountedRef.current = !!keepStateOptions.keepIsValid;
    };
    const setFocus = (name) => get(fieldsRef.current, name)._f.ref.focus();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = subjectsRef.current.state.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, readFormStateRef.current, true)) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), formState);
                    updateFormState(formStateRef.current);
                }
            },
        });
        const useFieldArraySubscription = subjectsRef.current.array.subscribe({
            next(state) {
                if (state.values && state.name && readFormStateRef.current.isValid) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, state.name, state.values);
                    updateIsValid(values);
                }
            },
        });
        return () => {
            formStateSubscription.unsubscribe();
            useFieldArraySubscription.unsubscribe();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const unregisterFieldNames = [];
        const isLiveInDom = (ref) => !isHTMLElement(ref) || !document.contains(ref);
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            readFormStateRef.current.isValid && updateIsValid();
            !shouldUnregister && registerAbsentFields(defaultValuesRef.current);
        }
        for (const name of namesRef.current.unMount) {
            const field = get(fieldsRef.current, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every(isLiveInDom)
                    : isLiveInDom(field._f.ref)) &&
                unregisterFieldNames.push(name);
        }
        unregisterFieldNames.length &&
            unregister(unregisterFieldNames);
        namesRef.current.unMount = new Set();
    });
    return {
        control: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
            register,
            inFieldArrayActionRef,
            getIsDirty,
            subjectsRef,
            watchInternal,
            fieldsRef,
            updateIsValid,
            namesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            fieldArrayDefaultValuesRef,
            setValues,
            unregister,
            shouldUnmount: shouldUnregister,
        }), []),
        formState: getProxyFormState(isProxyEnabled, formState, readFormStateRef),
        trigger,
        register,
        handleSubmit,
        watch: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(watch, []),
        setValue: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setValue, [setValues]),
        getValues: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(getValues, []),
        reset: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(reset, []),
        clearErrors: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(clearErrors, []),
        unregister: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(unregister, []),
        setError: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setError, []),
        setFocus: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setFocus, []),
    };
}

function useWatch(props) {
    const { control, name, defaultValue } = props || {};
    const methods = useFormContext();
    const nameRef = React.useRef(name);
    nameRef.current = name;
    const { watchInternal, subjectsRef } = control || methods.control;
    const [value, updateValue] = React.useState(isUndefined(defaultValue)
        ? watchInternal(name)
        : defaultValue);
    React.useEffect(() => {
        watchInternal(name);
        const watchSubscription = subjectsRef.current.watch.subscribe({
            next: ({ name: inputName, values }) => (!nameRef.current ||
                !inputName ||
                convertToArrayPayload(nameRef.current).some((fieldName) => inputName &&
                    fieldName &&
                    (fieldName.startsWith(inputName) ||
                        inputName.startsWith(fieldName)))) &&
                updateValue(watchInternal(nameRef.current, defaultValue, false, values)),
        });
        return () => watchSubscription.unsubscribe();
    }, []);
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
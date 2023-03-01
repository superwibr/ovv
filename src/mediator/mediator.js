import valid from "./validate.js";

const _mediate = manager => type => (inNode, outNode) => {
    const internal = {};
    const on = inNode.on((data, key) => {
        const isValid = valid(type)(data); console.log("isValid", isValid);
        internal.key = key;
        internal.data = data; console.log("internal", internal);
        if (isValid) manager(outNode, internal);
    });

    return {
        off: on.off
    };
};

const pipe = _mediate((outNode, { data }) => outNode.put(data));

const set = _mediate((outNode, { data }) => outNode.set(data));

const set100 = _mediate((outNode, internal) => {
    internal.setKeys || (internal.setKeys = [])

    const { key, data } = internal;
    internal.setKeys.push(key);
    outNode.set(data);

    while (internal.setKeys.length > 100) outNode.unset
});

const mediate = { pipe, set, set100 };

export default mediate;
export { pipe, set, set100 };
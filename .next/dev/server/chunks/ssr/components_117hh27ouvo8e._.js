module.exports = [
"[project]/components/assessment-wizard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssessmentWizard",
    ()=>AssessmentWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable @next/next/no-img-element -- user-selected blob URLs are local previews */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-ssr] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const problems = [
    "Tangled or matted",
    "Dry or frizzy",
    "Lace damage",
    "Shedding",
    "Needs restyling",
    "General maintenance"
];
const services = {
    "Tangled or matted": "Detangling & deep conditioning",
    "Dry or frizzy": "Moisture and frizz care",
    "Lace damage": "Lace/closure assessment",
    "Shedding": "Construction and shedding assessment",
    "Needs restyling": "Restyling and customization",
    "General maintenance": "Maintenance refresh"
};
const initial = {
    hair: "",
    length: "",
    construction: "",
    problems: [],
    severity: "",
    notes: "",
    uploads: {},
    location: "",
    date: "",
    handoff: "",
    instructions: "",
    name: "",
    phone: "",
    email: "",
    contact: ""
};
const labels = [
    "Wig info",
    "Problems",
    "Photos",
    "Assessment",
    "Booking",
    "Contact",
    "Confirmation"
];
function AssessmentWizard() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial), [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const ref = `RHS-DEMO-${stableId.replace(/[^a-z0-9]/gi, "").slice(-5).toUpperCase().padEnd(5, "0")}`;
    const suggested = [
        ...new Set(data.problems.map((p)=>services[p]))
    ];
    const validate = ()=>{
        const e = [];
        if (step === 0) {
            if (!data.hair) e.push("Choose a hair type");
            if (!data.length) e.push("Choose the wig length");
            if (!data.construction) e.push("Choose the construction type");
        }
        if (step === 1) {
            if (!data.problems.length) e.push("Select at least one problem");
            if (!data.severity) e.push("Choose the condition severity");
        }
        if (step === 2) {
            [
                "Front photo",
                "Back photo",
                "Close-up of damage"
            ].forEach((k)=>{
                if (!data.uploads[k]) e.push(`Add a ${k.toLowerCase()}`);
            });
        }
        if (step === 4) {
            if (!data.location) e.push("Choose a location");
            if (!data.date) e.push("Choose a demo date");
            if (!data.handoff) e.push("Choose drop-off or collection");
        }
        if (step === 5) {
            if (data.name.trim().length < 2) e.push("Enter your full name");
            if (data.phone.replace(/\D/g, "").length < 8) e.push("Enter a valid phone number");
            if (!/^\S+@\S+\.\S+$/.test(data.email)) e.push("Enter a valid email");
            if (!data.contact) e.push("Choose a preferred contact method");
        }
        setErrors(e);
        return !e.length;
    };
    const next = ()=>{
        if (!validate()) return;
        if (step === 5) {
            setSubmitting(true);
            setTimeout(()=>{
                setSubmitting(false);
                setDone(true);
                setStep(6);
            }, 800);
        } else setStep((s)=>Math.min(6, s + 1));
        setErrors([]);
        document.getElementById("wizard")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    const choose = (key, value)=>setData((d)=>({
                ...d,
                [key]: value
            }));
    const upload = (label, file)=>{
        if (!file) return;
        if (![
            "image/jpeg",
            "image/png",
            "image/webp"
        ].includes(file.type)) {
            setErrors([
                `${label}: use JPG, PNG, or WebP`
            ]);
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setErrors([
                `${label}: file must be under 5 MB`
            ]);
            return;
        }
        const prior = data.uploads[label];
        if (prior) URL.revokeObjectURL(prior.url);
        setData((d)=>({
                ...d,
                uploads: {
                    ...d.uploads,
                    [label]: {
                        file,
                        url: URL.createObjectURL(file)
                    }
                }
            }));
        setErrors([]);
    };
    const summary = `${ref}\n${data.hair} ${data.length} ${data.construction} wig\nProblems: ${data.problems.join(", ")} (${data.severity})\nSuggested categories: ${suggested.join(", ")}\nPreference: ${data.location}, ${data.date}, ${data.handoff}\nContact: ${data.name}, ${data.contact}`;
    const copy = async ()=>{
        await navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(()=>setCopied(false), 1800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wizard",
        className: "scroll-mt-24 rounded-[1.75rem] border border-[#e5ddea] bg-white shadow-[0_30px_80px_rgba(54,20,65,.12)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-[#eee8f1] p-5 md:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-[#8c557f]",
                                        children: "Demo assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 25,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "modern mt-1 text-xl font-bold text-[#34123d]",
                                        children: [
                                            "Step ",
                                            step + 1,
                                            " of 7 · ",
                                            labels[step]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 25,
                                        columnNumber: 181
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 25,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-[#f1e9f5] px-3 py-1 text-xs font-bold text-[#6d3275]",
                                children: [
                                    Math.round((step + 1) / 7 * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 25,
                                columnNumber: 288
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 25,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        "aria-label": `Progress: step ${step + 1} of 7`,
                        children: labels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-1.5 flex-1 rounded-full ${i <= step ? "bg-[#a33c76]" : "bg-[#e9e2ec]"}`
                            }, l, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 25,
                                columnNumber: 513
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 25,
                        columnNumber: 419
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 25,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[510px] p-5 md:p-8",
                children: [
                    errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "alert",
                        className: "mb-6 rounded-xl border border-[#f2b9c9] bg-[#fff2f5] p-4 text-sm text-[#8f2445]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Please check:"
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 27,
                                columnNumber: 132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-1 list-disc pl-5",
                                children: errors.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: e
                                    }, e, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 27,
                                        columnNumber: 213
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 27,
                                columnNumber: 162
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 27,
                        columnNumber: 22
                    }, this),
                    step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Tell us about your wig",
                        copy: "This helps us frame an initial assessment. A specialist would still inspect the wig in person.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Hair type",
                                options: [
                                    "Human hair",
                                    "Synthetic",
                                    "Unsure"
                                ],
                                value: data.hair,
                                set: (v)=>choose("hair", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 28,
                                columnNumber: 154
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Wig length",
                                options: [
                                    "Short",
                                    "Shoulder length",
                                    "Long",
                                    "Extra long"
                                ],
                                value: data.length,
                                set: (v)=>choose("length", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 28,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Construction",
                                options: [
                                    "Lace front",
                                    "Full lace",
                                    "Closure",
                                    "Machine-made",
                                    "Unsure"
                                ],
                                value: data.construction,
                                set: (v)=>choose("construction", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 28,
                                columnNumber: 415
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "What needs attention?",
                        copy: "Select every issue that applies.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 sm:grid-cols-2",
                                children: problems.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setData((d)=>({
                                                    ...d,
                                                    problems: d.problems.includes(p) ? d.problems.filter((x)=>x !== p) : [
                                                        ...d.problems,
                                                        p
                                                    ]
                                                })),
                                        className: `focus-ring flex items-center justify-between rounded-xl border p-4 text-left font-semibold ${data.problems.includes(p) ? "border-[#a13e78] bg-[#f8edf4] text-[#6c2053]" : "border-[#ded5e2] hover:border-[#b58eaf]"}`,
                                        children: [
                                            p,
                                            data.problems.includes(p) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 29,
                                                columnNumber: 548
                                            }, this)
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 151
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 29,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Current condition",
                                options: [
                                    "Mild",
                                    "Moderate",
                                    "Severe"
                                ],
                                value: data.severity,
                                set: (v)=>choose("severity", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 29,
                                columnNumber: 584
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-6 block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-2 block text-sm font-bold",
                                        children: [
                                            "Additional notes ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-[#766978]",
                                                children: "(optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 29,
                                                columnNumber: 809
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 745
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: data.notes,
                                        onChange: (e)=>choose("notes", e.target.value),
                                        rows: 4,
                                        className: "w-full rounded-xl border border-[#dcd3e0] p-4",
                                        placeholder: "What changed, and what result are you hoping for?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 878
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 29,
                                columnNumber: 715
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 29,
                        columnNumber: 15
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Show us the wig",
                        copy: "Photos stay in this browser and are not uploaded for this demonstration.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-3",
                            children: [
                                "Front photo",
                                "Back photo",
                                "Close-up of damage"
                            ].map((label)=>{
                                const u = data.uploads[label];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-2xl border border-dashed border-[#cdbed2] bg-[#faf7fb]",
                                    children: u ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: u.url,
                                                alt: `${label} preview`,
                                                className: "aspect-square w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 482
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    URL.revokeObjectURL(u.url);
                                                    setData((d)=>({
                                                            ...d,
                                                            uploads: {
                                                                ...d.uploads,
                                                                [label]: undefined
                                                            }
                                                        }));
                                                },
                                                className: "focus-ring absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-white text-[#8b2459] shadow",
                                                "aria-label": `Remove ${label}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/assessment-wizard.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 837
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 571
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block cursor-pointer p-3 text-center text-sm font-bold text-[#6d3275]",
                                                children: [
                                                    "Replace",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        hidden: true,
                                                        type: "file",
                                                        accept: "image/jpeg,image/png,image/webp",
                                                        onChange: (e)=>upload(label, e.target.files?.[0])
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assessment-wizard.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 961
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 865
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 30,
                                        columnNumber: 386
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex aspect-[4/5] cursor-pointer flex-col items-center justify-center p-5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                className: "mb-3 text-[#a33c76]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1194
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1238
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-2 text-xs text-[#807483]",
                                                children: "JPG, PNG or WebP · max 5 MB"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1262
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                hidden: true,
                                                type: "file",
                                                accept: "image/jpeg,image/png,image/webp",
                                                onChange: (e)=>upload(label, e.target.files?.[0])
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1342
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1089
                                    }, this)
                                }, label, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 30,
                                    columnNumber: 266
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/assessment-wizard.tsx",
                            lineNumber: 30,
                            columnNumber: 125
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 30,
                        columnNumber: 15
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Your initial treatment assessment",
                        copy: "Based on what you selected, these are the service categories a specialist may explore.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Summary, {
                                data: data
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 31,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 rounded-2xl bg-[#f4edf7] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[#481852]",
                                        children: "Potential service categories"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 31,
                                        columnNumber: 230
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 grid gap-2 sm:grid-cols-2",
                                        children: suggested.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "text-[#a33c76]",
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assessment-wizard.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 412
                                                    }, this),
                                                    s
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 31,
                                                columnNumber: 369
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 31,
                                        columnNumber: 304
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 31,
                                columnNumber: 179
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 rounded-xl border border-[#e2cad7] p-4 text-sm leading-6 text-[#675b69]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "No guarantee or quote yet."
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 31,
                                        columnNumber: 570
                                    }, this),
                                    " Fibre compatibility, construction, previous treatment, and damage must be inspected by a specialist before confirming whether restoration is possible, how long it may take, or what it may cost."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 31,
                                columnNumber: 478
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 31,
                        columnNumber: 15
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Choose demo booking preferences",
                        copy: "These scheduling choices are fictional and do not reserve a real appointment.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Illustrative location",
                                options: [
                                    "Lagos",
                                    "Abuja"
                                ],
                                value: data.location,
                                set: (v)=>choose("location", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 32,
                                columnNumber: 146
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Demo availability",
                                options: [
                                    "Tue, 17 Nov",
                                    "Thu, 19 Nov",
                                    "Sat, 21 Nov"
                                ],
                                value: data.date,
                                set: (v)=>choose("date", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 32,
                                columnNumber: 270
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                label: "Handover preference",
                                options: [
                                    "Studio drop-off",
                                    "Request collection"
                                ],
                                value: data.handoff,
                                set: (v)=>choose("handoff", v)
                            }, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 32,
                                columnNumber: 408
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-6 block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-2 block text-sm font-bold",
                                        children: [
                                            "Additional instructions ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-[#766978]",
                                                children: "(optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 32,
                                                columnNumber: 652
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 581
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: data.instructions,
                                        onChange: (e)=>choose("instructions", e.target.value),
                                        rows: 3,
                                        className: "w-full rounded-xl border border-[#dcd3e0] p-4",
                                        placeholder: "Any timing or handling notes?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 721
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 32,
                                columnNumber: 551
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 32,
                        columnNumber: 15
                    }, this),
                    step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "How should we reach you?",
                        copy: "Your contact details remain in this browser for this demonstration.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: "Full name",
                                    value: data.name,
                                    set: (v)=>choose("name", v),
                                    placeholder: "Ada Okafor"
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 33,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: "Phone number",
                                    value: data.phone,
                                    set: (v)=>choose("phone", v),
                                    placeholder: "0800 000 0000"
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 33,
                                    columnNumber: 267
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: "Email address",
                                    type: "email",
                                    value: data.email,
                                    set: (v)=>choose("email", v),
                                    placeholder: "ada@example.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 33,
                                    columnNumber: 370
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGroup, {
                                        label: "Preferred contact",
                                        options: [
                                            "WhatsApp",
                                            "Phone",
                                            "Email"
                                        ],
                                        value: data.contact,
                                        set: (v)=>choose("contact", v),
                                        compact: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 33,
                                        columnNumber: 494
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 33,
                                    columnNumber: 489
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/assessment-wizard.tsx",
                            lineNumber: 33,
                            columnNumber: 129
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 33,
                        columnNumber: 15
                    }, this),
                    step === 6 && done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                        title: "Your demo request is ready",
                        copy: "No real booking has been submitted. Keep this summary as a preview of the completed experience.",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-[#32113d] p-6 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest text-[#dba8cb]",
                                        children: "Demo request reference"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 222
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "modern mt-2 text-3xl font-extrabold",
                                        children: ref
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 318
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 34,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Summary, {
                                        data: data
                                    }, void 0, false, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 406
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-xl bg-[#fff3f7] p-4 text-sm text-[#78304e]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Demonstration only."
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 34,
                                                columnNumber: 501
                                            }, this),
                                            " No information was transmitted, no payment was taken, and no appointment was reserved."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 428
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copy,
                                        className: "focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-[#9d3b76] px-5 py-3 font-bold text-[#76295d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/components/assessment-wizard.tsx",
                                                lineNumber: 34,
                                                columnNumber: 784
                                            }, this),
                                            copied ? "Summary copied" : "Copy assessment summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assessment-wizard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 630
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 34,
                                columnNumber: 384
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 26,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-t border-[#eee8f1] p-5 md:p-7",
                children: [
                    step > 0 && step < 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setStep((s)=>s - 1);
                            setErrors([]);
                        },
                        className: "focus-ring inline-flex items-center gap-1 rounded-full px-3 py-2 font-bold text-[#6c5d70]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                fileName: "[project]/components/assessment-wizard.tsx",
                                lineNumber: 36,
                                columnNumber: 263
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 36,
                        columnNumber: 107
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 36,
                        columnNumber: 291
                    }, this),
                    step < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: next,
                        disabled: submitting,
                        className: "focus-ring inline-flex min-w-36 items-center justify-center gap-2 rounded-full bg-[#a33c76] px-6 py-3 font-bold text-white transition hover:bg-[#81285e] disabled:opacity-60",
                        children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                    className: "animate-spin",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 552
                                }, this),
                                "Creating…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/assessment-wizard.tsx",
                            lineNumber: 36,
                            columnNumber: 550
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                step === 5 ? "Create demo request" : "Continue",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/assessment-wizard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/assessment-wizard.tsx",
                            lineNumber: 36,
                            columnNumber: 615
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 36,
                        columnNumber: 308
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 36,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-wizard.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function Step({ title, copy, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "modern text-2xl font-extrabold text-[#301139] md:text-3xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 39,
                columnNumber: 102
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 mb-7 max-w-2xl text-sm leading-6 text-[#766a78]",
                children: copy
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 39,
                columnNumber: 188
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-wizard.tsx",
        lineNumber: 39,
        columnNumber: 97
    }, this);
}
function ChoiceGroup({ label, options, value, set, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "mb-3 text-sm font-bold",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 40,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-wrap gap-2 ${compact ? "md:mt-0" : ""}`,
                children: options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>set(o),
                        className: `focus-ring rounded-full border px-4 py-2.5 text-sm font-semibold ${value === o ? "border-[#9e3a74] bg-[#9e3a74] text-white" : "border-[#d9cfdd] bg-white hover:border-[#a987a5]"}`,
                        children: o
                    }, o, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 40,
                        columnNumber: 319
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 40,
                columnNumber: 239
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-wizard.tsx",
        lineNumber: 40,
        columnNumber: 153
    }, this);
}
function Input({ label, value, set, placeholder, type = "text" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-sm font-bold",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 41,
                columnNumber: 154
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: (e)=>set(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-xl border border-[#dcd3e0] px-4 py-3"
            }, void 0, false, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 41,
                columnNumber: 215
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-wizard.tsx",
        lineNumber: 41,
        columnNumber: 147
    }, this);
}
function Summary({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
        className: "grid gap-3 rounded-2xl border border-[#e6dce9] p-5 sm:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "text-xs uppercase tracking-wider text-[#8a7c8d]",
                        children: "Wig"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 132
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "mt-1 font-bold",
                        children: [
                            data.hair,
                            " · ",
                            data.length,
                            " · ",
                            data.construction
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 204
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 42,
                columnNumber: 127
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "text-xs uppercase tracking-wider text-[#8a7c8d]",
                        children: "Condition"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 300
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "mt-1 font-bold",
                        children: data.severity || "Not selected"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 378
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 42,
                columnNumber: 295
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "text-xs uppercase tracking-wider text-[#8a7c8d]",
                        children: "Selected problems"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 482
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "mt-1 font-bold",
                        children: data.problems.join(", ")
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 568
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 42,
                columnNumber: 451
            }, this),
            data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "text-xs uppercase tracking-wider text-[#8a7c8d]",
                        children: "Preference"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 657
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "mt-1 font-bold",
                        children: [
                            data.location,
                            " · ",
                            data.date,
                            " · ",
                            data.handoff
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 736
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 42,
                columnNumber: 652
            }, this),
            data.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                        className: "text-xs uppercase tracking-wider text-[#8a7c8d]",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 842
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                        className: "mt-1 font-bold",
                        children: [
                            data.name,
                            " · ",
                            data.contact
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assessment-wizard.tsx",
                        lineNumber: 42,
                        columnNumber: 918
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assessment-wizard.tsx",
                lineNumber: 42,
                columnNumber: 837
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assessment-wizard.tsx",
        lineNumber: 42,
        columnNumber: 45
    }, this);
}
}),
"[project]/components/mobile-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function MobileMenu({ links, dark = false }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "focus-ring grid h-11 w-11 place-items-center rounded-full border border-current/20",
                onClick: ()=>setOpen(!open),
                "aria-expanded": open,
                "aria-label": "Toggle menu",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                    fileName: "[project]/components/mobile-menu.tsx",
                    lineNumber: 8,
                    columnNumber: 187
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                    fileName: "[project]/components/mobile-menu.tsx",
                    lineNumber: 8,
                    columnNumber: 192
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/mobile-menu.tsx",
                lineNumber: 8,
                columnNumber: 3
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl p-3 shadow-2xl ${dark ? "bg-[#2c1135] text-white" : "bg-[#fffaf5] text-[#351821]"}`,
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: l.href,
                        onClick: ()=>setOpen(false),
                        className: "focus-ring block rounded-xl px-4 py-3 hover:bg-current/10",
                        children: l.label
                    }, l.href, false, {
                        fileName: "[project]/components/mobile-menu.tsx",
                        lineNumber: 10,
                        columnNumber: 18
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/mobile-menu.tsx",
                lineNumber: 9,
                columnNumber: 12
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/mobile-menu.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=components_117hh27ouvo8e._.js.map
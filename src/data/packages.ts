
export interface PackageItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  price: {
    original: number;
    discounted: number;
  };
  tests: {
    en: string;
    ar: string;
  }[];
}

export const packages: PackageItem[] = [
  {
    id: "arthritis-rheumatism",
    title: {
      en: "Arthritis and Rheumatism Package",
      ar: "بكج التهاب المفاصل والروماتيزم"
    },
    price: {
      original: 90,
      discounted: 50
    },
    tests: [
      { en: "CBC", ar: "فحص تعداد الدم الشامل" },
      { en: "ESR", ar: "فحص معامل الالتهاب" },
      { en: "CRP", ar: "فحص البروتين المتفاعل" },
      { en: "RF", ar: "فحص معامل الروماتيزم" },
      { en: "ANA", ar: "فحص المناعة للأجسام المضادة" },
      { en: "Anti-CCP", ar: "فحص المناعة" }, // Note: Anti-CCP is specific for RA
      { en: "Ca", ar: "فحص الكالسيوم" },
      { en: "ALK PHSPHOTAES", ar: "فحص إنزيم" } // Corrected spelling based on medical term Alkaline Phosphatase would be better but keeping close to image if needed, though image has typo. Let's fix typo to Alkaline Phosphatase
    ]
  },
  {
    id: "saving-package",
    title: {
      en: "Saving Package",
      ar: "بكج التوفير"
    },
    price: {
      original: 75,
      discounted: 27
    },
    tests: [
      { en: "Vitamin D3", ar: "فحص فيتامين د" },
      { en: "Vitamin B12", ar: "فحص فيتامين ب 12" },
      { en: "Ferritin", ar: "فحص مخزون الحديد" },
      { en: "Iron", ar: "فحص الحديد" },
      { en: "CBC", ar: "فحص تعداد الدم الشامل" }
    ]
  },
  {
    id: "obesity",
    title: {
      en: "Obesity Package",
      ar: "فحص السمنة وزيادة الوزن"
    },
    price: {
      original: 75,
      discounted: 30
    },
    tests: [
      { en: "TSH", ar: "الغدة الدرقية" },
      { en: "Homa Score", ar: "مقاومة الانسولين" },
      { en: "Insulin", ar: "الأنسولين" },
      { en: "FBS", ar: "سكر الصائم" },
      { en: "Cholestrol", ar: "الكوليسترول" },
      { en: "HDL", ar: "الدهون النافعة" },
      { en: "LDL", ar: "الدهون الضارة" },
      { en: "Triglycerides", ar: "الدهون الثلاثية" }
    ]
  },
  {
    id: "female-hormones",
    title: {
      en: "Female Hormones Package",
      ar: "بكج الهرمونات النسائية"
    },
    price: {
      original: 100,
      discounted: 49
    },
    tests: [
      { en: "FSH", ar: "الهرمون المحفز لنمو البويضات" },
      { en: "LH", ar: "هرمون اللوتين" },
      { en: "Prolactin", ar: "هرمون الحليب" },
      { en: "Progesterone", ar: "هرمون بروجستيرون" },
      { en: "Estradiol", ar: "هرمون أستراديول" },
      { en: "Testosterone Free", ar: "هرمون الذكوره" },
      { en: "TSH", ar: "هرمون الغدة الدرقية" }
    ]
  },
  {
    id: "diabetes-hypertension",
    title: {
      en: "Diabetes & Hypertension Package",
      ar: "بكج الضغط والسكري"
    },
    price: {
      original: 60,
      discounted: 30
    },
    tests: [
      { en: "CBC", ar: "فحص تعداد الدم الشامل" },
      { en: "FBS", ar: "فحص سكر الصائم" },
      { en: "HbA1c", ar: "فحص التراكمي" },
      { en: "Creatinine, Urea", ar: "فحص الكلى" },
      { en: "Uric Acid", ar: "فحص النقرس" },
      { en: "Na, K, Cl", ar: "فحص الأملاح" },
      { en: "Urine Analysis", ar: "فحص البول" },
      { en: "Lipid Profile", ar: "فحص الدهنيات" }, // This includes Triglycerides, HDL, LDL, Cholesterol usually, but they are listed below in image too? No, image lists them under Lipid Profile column style maybe? Let's check image.
      // Image 5: "Lipid Profile: Triglycerides, HDL, LDL, Cholestrol". It lists Lipid Profile then sub items.
      // I will flatten it for the card or treat Lipid Profile as a header?
      // For simplicity and consistency with other cards, I will list the sub items, or keep as image. 
      // The image shows "Lipid Profile : ...sub items...".
      // Let's list specific tests.
      { en: "Triglycerides", ar: "الدهون الثلاثية" },
      { en: "HDL", ar: "الدهون النافعة" },
      { en: "LDL", ar: "الدهون الضارة" },
      { en: "Cholestrol", ar: "الكوليسترول" }
    ]
  },
  {
    id: "tumor-markers-male",
    title: {
      en: "Tumor Markers Package (Male)",
      ar: "بكج المؤشرات السرطانية (للرجال)"
    },
    price: {
      original: 110,
      discounted: 40
    },
    tests: [
      { en: "CEA", ar: "سرطان القولون" },
      { en: "CA 19-9", ar: "سرطان البنكرياس" },
      { en: "Total - PSA", ar: "سرطان البروستات" },
      { en: "Free - PSA", ar: "سرطان البروستات" },
      { en: "AFP", ar: "سرطان الكبد" }
    ]
  },
  {
    id: "vitamins-minerals",
    title: {
      en: "Vitamins & Minerals Package",
      ar: "بكج الفيتامينات والمعادن"
    },
    price: {
      original: 100,
      discounted: 50
    },
    tests: [
      { en: "Vitamin D3", ar: "فحص فيتامين د" },
      { en: "Vitamin B12", ar: "فحص فيتامين ب 12" },
      { en: "Folic Acid", ar: "فحص حمض الفوليك" },
      { en: "Iron", ar: "فحص الحديد" },
      { en: "Ferritin", ar: "فحص مخزون الحديد" },
      { en: "Zinc", ar: "فحص الزنك" },
      { en: "Magnesium", ar: "فحص المغنيسيوم" },
      { en: "Calcium", ar: "فحص الكالسيوم" },
      { en: "TIBC", ar: "معامل ربط الحديد" },
      { en: "PO4", ar: "فحص الفسفور" },
      { en: "CBC", ar: "فحص صورة الدم الشامل" }
    ]
  },
  {
    id: "vip-package",
    title: {
      en: "VIP Package",
      ar: "بكج الفحص الشامل"
    },
    price: {
      original: 130,
      discounted: 65
    },
    tests: [
      { en: "Zinc", ar: "فحص الزنك" },
      { en: "Lipid Profile", ar: "فحص الدهنيات" }, // Triglycerides, HDL, LDL, Cholesterol are sub-items in image but listed linearly here works too or implied. Image has colon.
      { en: "Triglycerides", ar: "فحص الدهون الثلاثية" },
      { en: "HDL", ar: "فحص الدهنيات النافعة" },
      { en: "LDL", ar: "فحص الدهنيات الضارة" },
      { en: "Cholesterol", ar: "فحص الكوليسترول" },
      { en: "ALT, AST", ar: "فحص وظائف الكبد" },
      { en: "Magnesium", ar: "فحص المغنيسيوم" },
      { en: "D3", ar: "فحص فيتامين د" },
      { en: "TSH", ar: "فحص الغدة الدرقية" },
      { en: "Ferritin", ar: "فحص مخزون الحديد" },
      { en: "B12", ar: "فحص فيتامين ب12" },
      { en: "CBC", ar: "فحص صورة الدم الشامل" },
      { en: "Creatinine, Urea", ar: "فحص وظائف الكلى" },
      { en: "Uric Acid", ar: "فحص النقرس" },
      { en: "Na, Cl, K", ar: "فحص الأملاح والمعادن" },
      { en: "Plus ONE free choice: HbA1c / H.pylori / Folic Acid", ar: "إضافة الى اختيار فحص واحد مجاناً: HbA1c / H.pylori / Folic Acid" }
    ]
  },
  {
    id: "golden-test",
    title: {
      en: "Golden Test Package",
      ar: "البكج الشامل (الذهبي)"
    },
    price: {
      original: 300,
      discounted: 149
    },
    tests: [
      { en: "CK, CKMB, Troponin I", ar: "فحص أنزيمات القلب" },
      { en: "Insulin Resistance", ar: "فحص مقاومة الانسولين" },
      { en: "Insulin", ar: "فحص الانسولين" },
      { en: "ESR, CRP", ar: "فحص مؤشرات الالتهاب" },
      { en: "RF", ar: "فحص معامل الروماتيزم" },
      { en: "H.pylori", ar: "فحص جرثومة المعدة" },
      { en: "Tumor Markers", ar: "فحص المؤشرات السرطانية" }, // There is a list after this in the image, likely included
      { en: "CEA", ar: "سرطان القولون" },
      { en: "AFP", ar: "سرطان الكبد" },
      { en: "Ca 19-9", ar: "سرطان البنكرياس" },
      { en: "Ca 125", ar: "سرطان المبيض (للنساء)" },
      { en: "Ca 15-3", ar: "سرطان الثدي (للنساء)" },
      { en: "Total PSA", ar: "سرطان البروستات (للرجال)" },
      { en: "Free PSA", ar: "سرطان البروستات (للرجال)" },
      { en: "KFT", ar: "فحص وظائف الكلى كامل" },
      { en: "LFT", ar: "فحص وظائف الكبد كامل" },
      { en: "Lipid Profile", ar: "فحص الدهنيات بأنواعها" },
      { en: "Vitamin D", ar: "فحص فيتامين د" },
      { en: "Vitamin B12", ar: "فحص فيتامين ب12" },
      { en: "Ferritin", ar: "فحص مخزون الحديد" },
      { en: "Thyroid (TSH, T3, T4)", ar: "فحوصات الغدة الدرقية" },
      { en: "PTH", ar: "فحوصات الجار درقية" },
      { en: "HbA1c", ar: "فحص السكر التراكمي" },
      { en: "FBS", ar: "فحص سكر الصيام" },
      { en: "Folic Acid", ar: "فحص الفوليك اسيد" },
      { en: "CBC", ar: "فحص صورة الدم الشامل" },
      { en: "Zinc", ar: "فحص الزنك" },
      { en: "Magnesium", ar: "فحص المغنيسيوم" },
      { en: "Calcium", ar: "فحص الكالسيوم" },
      { en: "Amylase, Lipase", ar: "فحص انزيمات البنكرياس" },
      { en: "LDH", ar: "فحص إنزيم" },
      { en: "Urine Analysis", ar: "فحص البول" },
      { en: "Na, K, Cl", ar: "فحص الاملاح والمعادن" }
    ]
  },
  {
    id: "tumor-markers-female",
    title: {
      en: "Tumor Markers Package (Female)",
      ar: "بكج المؤشرات السرطانية (للسيدات)"
    },
    price: {
      original: 110,
      discounted: 40
    },
    tests: [
      { en: "CEA", ar: "سرطان القولون" },
      { en: "CA 19-9", ar: "سرطان البنكرياس" },
      { en: "CA 125", ar: "سرطان المبيض" },
      { en: "CA 15-3", ar: "سرطان الثدي" },
      { en: "AFP", ar: "سرطان الكبد" }
    ]
  },
  {
    id: "hair-loss",
    title: {
      en: "Hair Loss Package",
      ar: "بكج تساقط الشعر"
    },
    price: {
      original: 55,
      discounted: 25
    },
    tests: [
      { en: "CBC", ar: "فحص تعداد الدم الشامل" },
      { en: "Iron", ar: "فحص الحديد" },
      { en: "Ferritin", ar: "فحص مخزون الحديد" },
      { en: "Zinc", ar: "فحص الزنك" },
      { en: "Magnesium", ar: "فحص المغنيسيوم" },
      { en: "Calcium", ar: "فحص الكالسيوم" }
    ]
  }
];

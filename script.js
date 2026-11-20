/* =========================================================
   1. قاعدة البيانات الأولية (دروس، ملخصات، وتمارين لكل سنة)
   ========================================================= */
const STORAGE_KEY = 'anfel_tabet_svt_content_v1';

const defaultContent = [
  // ---------- السنة الأولى ثانوي (1AS) ----------
  {
    id: '1as-1',
    level: '1as',
    category: 'lesson',
    unit: 'المجال 01: استعمال المادة وتحويل الطاقة',
    title: 'آليات النمو والتجديد الخلوي عند الكائنات الحية',
    content: `1. مظاهر النمو عند الكائن الحي:
يتمثل النمو في الزيادة غير العكوسة في أبعاد وكتلة الكائن الحي، ويحدث بفضل آليتين أساسيتين:
- تكاثر الخلايا عن طريق الانقسام الخيطي المتساوي (Mitose).
- تزايد أبعاد الخلايا (استطالتها) وامتصاصها للماء والمغذيات.

2. مناطق النمو:
- عند النبات: القمم النامية للجذور والساق (المنطقة المرستيمية يليها منطقة الاستطالة).
- عند الحيوان: خلايا متخصصة في الأنسجة (مثل الخلايا الغضروفية في العظام الطويلة).

3. مراحل الانقسام الخيطي المتساوي:
يمر الانقسام الخيطي بأربع مراحل متتالية بعد المرحلة البينية:
أ) المرحلة التمهيدية: تحلزن الصبغيات وزوال الغلاف النووي وتشكل خيوط المغزل اللالوني.
ب) المرحلة الاستوائية: توضع الصبغيات المضاعفة في المستوى الاستوائي للخلية مشكلة اللوحة الاستوائية.
ج) المرحلة الانفصالية: انشطار الجزء المركزي وهجرة كل كروماتيد نحو أحد قطبي الخلية.
د) المرحلة النهائية: زوال تحلزن الصبغيات، تشكل الغلاف النووي وانقسام السيتوبلازم للحصول على خليتين بنتين متماثلتين تحملان نفس العدد الصبغي (2ن).`,
    isCustom: false
  },
  {
    id: '1as-2',
    level: '1as',
    category: 'summary',
    unit: 'المجال 01: تحويل الطاقة الكيميائية الكامنة',
    title: 'ملخص شامل: التركيب الضوئي والتنفس والتخمر',
    content: `• التركيب الضوئي (Photosynthèse):
ظاهرة حيوية تقوم بها النباتات اليخضورية في وجود الضوء وغاز CO2 والماء والأملاح المعدنية لتركيب المادة العضوية (السكريات) وطرح غاز O2.
المعادلة الإجمالية:
6 CO2 + 12 H2O  --(ضوء + يخضور)-->  C6H12O6 + 6 O2 + 6 H2O

• التنفس الخلوي (Respiration):
هدم كلي للمادة العضوية (الغلوكوز) في وجود O2 داخل الخلية لإنتاج طاقة كبيرة قابلة للاستعمال (ATP) وطرح CO2 و H2O.

• التخمر الكحولي (Fermentation):
هدم جزئي للمادة العضوية في غياب O2 لإنتاج طاقة ضئيلة وطرح CO2 وإيثانول.`,
    isCustom: false
  },
  {
    id: '1as-3',
    level: '1as',
    category: 'exercise',
    unit: 'المجال 01: استعمال المادة',
    title: 'تمرين تطبيقي: دراسة الانقسام الخيطي عند جذر البصل',
    content: `تم فحص مقطع طولي في القمة النامية لجذر نبات البصل (2ن = 16 صبغي) بالمجهر الضوئي، فتمت ملاحظة خلايا في أطوار مختلفة من الانقسام.
المطلوب:
1. حدد بدقة المنطقة التي تم أخذ منها هذا المقطع مع التعليل.
2. كم يكون عدد الصبغيات وعدد الكروماتيدات في الخلية الواحدة خلال:
   - المرحلة الاستوائية.
   - نهاية المرحلة الانفصالية (في كل قطب).
3. لخص في نص علمي منظم كيف يضمن الانقسام الخيطي المتساوي ثبات الصيغة الصبغية.`,
    solution: `الحل النموذجي:
1. المنطقة المدروسة: المنطقة المرستيمية (القمية) للجذر، لأن خلاياها تتميز بقدرتها العالية على الانقسام والتكاثر السريع.
2. عدد الصبغيات والكروماتيدات:
- في المرحلة الاستوائية: 16 صبغي مضاعف، أي 32 كروماتيد.
- في نهاية المرحلة الانفصالية (في كل قطب): 16 صبغي بسيط (أحادي الكروماتيد)، أي 16 كروماتيد.
3. النص العلمي:
يضمن الانقسام الخيطي المتساوي انتقال الخبر الوراثي وثبات الصيغة الصبغية (2ن) عبر الأجيال الخلوية، حيث يسبق الانقسام مرحلة بينية يتضاعف فيها كل صبغي إلى كروماتيدين، ثم خلال المرحلة الانفصالية ينفصل كروماتيدا كل صبغي ليهاجر كل منهما نحو قطب معاكس، مما يعطي خليتين بنتين متماثلتين تماماً للخلية الأم (2ن).`,
    isCustom: false
  },

  // ---------- السنة الثانية ثانوي (2AS) ----------
  {
    id: '2as-1',
    level: '2as',
    category: 'lesson',
    unit: 'المجال 01: آليات التنظيم على مستوى العضوية',
    title: 'التنظيم العصبي: المنعكس العضلي ودعامته التشريحية',
    content: `1. مفهوم المنعكس العضلي:
هو فعل لا إرادي يتمثل في تقلص العضلة استجابة لتمددها، ويساهم في الحفاظ على وضعية الجسم وتوازنه.

2. العناصر التشريحية المتدخلة في القوس الانعكاسية:
- مستقبل حسي (المغزل العصبي العضلي): يستقبل التنبيه (التمدد) ويولد سيالة عصبية حسية.
- ناقل حسي (ليف عصبي حسي): ينقل الرسالة العصبية الجابذة نحو النخاع الشوكي عبر الجذر الخلفي.
- مركز عصبي (النخاع الشوكي): يترجم الرسالة الحسية إلى رسالة حركية.
- ناقل حركي (عصبون حركي): ينقل الرسالة العصبية النابذة عبر الجذر الأمامي.
- عضو منفذ (العضلة الهيكلية): تستجيب بالتقلص (العضلة الباسطة) بينما تسترخي العضلة المضادة (القابضة) بفضل العصبون الجامع المثبط.`,
    isCustom: false
  },
  {
    id: '2as-2',
    level: '2as',
    category: 'summary',
    unit: 'المجال 01: التنظيم الهرموني',
    title: 'ملخص التحلون وآليات تنظيم نسبة السكر في الدم',
    content: `• القيمة المرجعية للتحلون: تتراوح بين 0.8 و 1.1 غ/ل.
• جهاز التنظيم الخلطي (جزر لانجرهانس في البنكرياس):
1. في حالة الإفراط السكري (بعد وجبة غذائية):
- تتحسس الخلايا بيتا (β) فتفرز هرمون الأنسولين في الدم.
- يحفز الأنسولين الخلايا الكبدية والعضلية والدهنية على تخزين الغلوكوز على شكل غليكوجين وثلاثي غليسيريد، مما يخفض التحلون إلى القيمة المرجعية.

2. في حالة القصور السكري (صيام أو مجهود عضلي):
- تتحسس الخلايا ألفا (α) فتفرز هرمون الغلوكاغون.
- يحفز الغلوكاغون إماهة الغليكوجين الكبدي وتحرير الغلوكوز في الدم لرفع التحلون.`,
    isCustom: false
  },
  {
    id: '2as-3',
    level: '2as',
    category: 'exercise',
    unit: 'المجال 02: وحدة الكائنات الحية',
    title: 'تمرين نموذجي: البنية الجزيئية للـ ADN',
    content: `أظهر التحليل الكيميائي لقطعة من جزيئة الـ ADN المستخلصة من خلية حيوانية أن نسبة القاعدة الآزوتية الأدنين (A) تساوي 22%.
المطلوب:
1. احسب النسب المئوية لباقي القواعد الآزوتية (T, C, G) مع التعليل.
2. إذا علمت أن هذه القطعة تحتوي على 440 قاعدة أدنين (A)، احسب العدد الإجمالي للنيكليوتيدات في هذه القطعة، ثم استنتج طولها بالنانومتر (علماً أن طول كل زوج من القواعد يساوي 0.34 nm).`,
    solution: `الحل النموذجي:
1. حساب النسب المئوية للقواعد الآزوتية:
حسب قاعدة شارغاف، تتكامل القواعد الآزوتية في سلسلتي الـ ADN بحيث (A = T) و (C = G):
- بما أن A = 22% فإن T = 22%.
- مجموع (A + T) = 44%، ومنه مجموع (C + G) = 100% - 44% = 56%.
- إذن: C = G = 56% / 2 = 28%.

2. حساب العدد الإجمالي للنيكليوتيدات والطول:
- A = 440 تمثل 22% من المجموع الكلي (N):
  N = (440 × 100) / 22 = 2000 نيكليوتيدة (أي 1000 زوج من القواعد).
- الطول = 1000 × 0.34 = 340 نانومتر (nm).`,
    isCustom: false
  },

  // ---------- السنة الثالثة ثانوي (3AS - بكالوريا) ----------
  {
    id: '3as-1',
    level: '3as',
    category: 'lesson',
    unit: 'الوحدة 01: تركيب البروتين',
    title: 'آليات الاستنساخ والترجمة ومقر تركيب البروتين',
    content: `1. مقر تركيب البروتين:
يتم تركيب البروتين في الهيولى (السيتوبلازم) على مستوى الشبكة الهيولية المحببة انطلاقاً من الأحماض الأمينية الناتجة عن الهضم، بتدخل وسيط ينقل المعلومة الوراثية من النواة إلى الهيولى وهو الـ ARNm.

2. مرحلة الاستنساخ (في النواة):
يقوم إنزيم ARN بوليميراز بفتح سلسلتي الـ ADN وقراءة السلسلة المستنسخة في الاتجاه (3' ← 5') لبناء سلسلة ARNm مكملة لها في الاتجاه (5' ← 3') وفق تكامل القواعد الآزوتية (A يقابلها U، و T يقابلها A، و C يقابلها G).

3. مرحلة الترجمة (في الهيولى):
تترجم اللغة النووية (متتالية رامزات الـ ARNm) إلى لغة بروتينية (متتالية أحماض أمينية) على مستوى الريبوزومات بتدخل الـ ARNt الذي ينقل الأحماض الأمينية المنشطة، وتمر بثلاث مراحل: الانطلاق (عند رامزة البدء AUG)، الاستطالة، والنهاية (عند إحدى رامزات التوقف UAA, UAG, UGA).`,
    isCustom: false
  },
  {
    id: '3as-2',
    level: '3as',
    category: 'summary',
    unit: 'الوحدة 02 و 03: العلاقة بين بنية ووظيفة البروتين والإنزيمات',
    title: 'ملخص مستويات البنية الفراغية للبروتين والنشاط الإنزيمي',
    content: `• مستويات البنية الفراغية للبروتين:
1. البنية الأولية: تسلسل خطي محدد للأحماض الأمينية مرتبطة بروابط ببتيدية.
2. البنية الثانوية: التفاف السلسلة الببتيدية إلى حلزون ألفا (α) أو وريقات مطوية بيتا (β) بفضل روابط هيدروجينية.
3. البنية الثالثية: انطواء السلسلة في الفضاء وتحافظ على استقرارها أربع روابط (جسور ثنائية الكبريت، شاردية، هيدروجينية، وتجاذب الجذور الكارهة للماء).
4. البنية الرابعية: تجمع سلسلتين ببتيديتين أو أكثر (تحت وحدات).

• التخصص الوظيفي للإنزيم:
يرتكز على الموقع الفعال (منطقة التثبيت + منطقة التحفيز) الذي يتكامل بنيوياً مع مادة التفاعل (الركيزة) وفق التكامل المحفز.`,
    isCustom: false
  },
  {
    id: '3as-3',
    level: '3as',
    category: 'exercise',
    unit: 'الوحدة 04: دور البروتينات في الدفاع عن الذات (المناعة)',
    title: 'تمرين بكالوريا: آلية القضاء على الخلايا المصابة بالفيروس',
    content: `تستهدف بعض الفيروسات الخلايا اللمفاوية التائية المساعدة (LT4)، مما يؤدي إلى تراجع الاستجابة المناعية النوعية الخلوية والخلطية معاً.
المطلوب:
1. فسر لماذا يؤدي تخريب الخلايا LT4 إلى شلل الاستجابتين الخلطية (LB) والخلوية (LT8).
2. اشرح في نص علمي مهيكل آلية انتقاء وتنشيط وتمايز الخلايا LT8 وصولاً إلى تخريب الخلية المصابة بالفيروس.`,
    solution: `الحل النموذجي:
1. التفسير:
تفرز الخلايا LT4 المحفزة (LTh) مبلغاً كيميائياً هو الأنترلوكين 2 (IL2)، وهو ضروري لتحفيز تكاثر وتمايز كل من الخلايا اللمفاوية البائية (LB) المنتقاة إلى خلايا بلازمية منتجة للأجسام المضادة، والخلايا LT8 المنتقاة إلى خلايا لمفاوية تائية سامة (LTc). لذا فإن تخريب LT4 يوقف إفراز IL2 فتتوقف الاستجابتان معاً.

2. النص العلمي:
- الانتقاء النسيلي: تتعرف الخلايا LT8 ذات المستقبل الغشائي TCR النوعي تعرفاً مزدوجاً على الببتيد المستضدي الفيروسي المعروض على جزيئة HLA-I للخلية المصابة.
- التنشيط والتكاثر: تفرز البالعة الكبيرة IL1 فتُظهر LT8 مستقبلات IL2، وتحت تأثير IL2 المفرز من LTh تتكاثر LT8 وتتمايز إلى خلايا منفذة سامة LTc.
- التنفيذ (التخريب): تتعرف LTc تعرفاً مزدوجاً على الخلية المصابة وتفرز بروتين البرفورين الذي يُحدث ثقوباً في غشائها مع إنزيم الغرانزيم، مما يؤدي إلى تحللها بالصدمة الحلولية.`,
    isCustom: false
  }
];

/* =========================================================
   2. إدارة الحالة والتخزين المحلي (State Management)
   ========================================================= */
let contentList = loadContent();
let currentLevel = '1as';
let currentCategory = 'all';

const levelInfoMap = {
  '1as': {
    badge: 'السنة الأولى ثانوي (1AS)',
    title: 'دروس وملخصات وتمارين السنة الأولى ثانوي'
  },
  '2as': {
    badge: 'السنة الثانية ثانوي (2AS)',
    title: 'دروس وملخصات وتمارين السنة الثانية ثانوي'
  },
  '3as': {
    badge: 'السنة الثالثة ثانوي - بكالوريا (3AS)',
    title: 'دروس وملخصات وتمارين البكالوريا (3AS)'
  }
};

function loadContent() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('LocalStorage unavailable:', e);
  }
  return [...defaultContent];
}

function saveContent() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contentList));
  } catch (e) {
    console.warn('Could not save to LocalStorage:', e);
  }
}

/* =========================================================
   3. التنقل بين السنوات والأقسام وعرض البطاقات
   ========================================================= */
function selectLevelFromNav(event, level) {
  switchLevel(level);
}

function switchLevel(level) {
  currentLevel = level;

  // تحديث بطاقات السنوات
  document.querySelectorAll('.level-card').forEach(card => {
    card.classList.toggle('active', card.dataset.level === level);
  });

  // تحديث روابط الهيدر
  document.querySelectorAll('.nav-link[data-target]').forEach(link => {
    link.classList.toggle('active', link.dataset.target === level);
  });

  // إغلاق قائمة الهاتف إن كانت مفتوحة
  document.getElementById('navLinks').classList.remove('open');

  // تحديث عنوان مساحة العمل
  document.getElementById('currentLevelBadge').textContent = levelInfoMap[level].badge;
  document.getElementById('currentLevelTitle').textContent = levelInfoMap[level].title;

  renderContent();
}

function switchCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === category);
  });
  renderContent();
}

function renderContent() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const levelItems = contentList.filter(item => item.level === currentLevel);

  // تحديث العدادات داخل السنة الحالية
  document.getElementById('count-all').textContent = levelItems.length;
  document.getElementById('count-lesson').textContent = levelItems.filter(i => i.category === 'lesson').length;
  document.getElementById('count-summary').textContent = levelItems.filter(i => i.category === 'summary').length;
  document.getElementById('count-exercise').textContent = levelItems.filter(i => i.category === 'exercise').length;

  // تحديث الإحصائيات العامة في الهيرو
  document.getElementById('stat-lessons').textContent = contentList.filter(i => i.category === 'lesson').length;
  document.getElementById('stat-summaries').textContent = contentList.filter(i => i.category === 'summary').length;
  document.getElementById('stat-exercises').textContent = contentList.filter(i => i.category === 'exercise').length;

  // تصفية العناصر حسب التبويب والبحث
  const filtered = levelItems.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const matchSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.unit.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  const grid = document.getElementById('contentGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span>🔬</span>
        <h4>لا يوجد محتوى مطابق لبحثك حالياً</h4>
        <p>جرب تغيير كلمات البحث أو اضغط على زر «+ إضافة محتوى» لنشر درس أو تمرين جديد.</p>
      </div>
    `;
    return;
  }

  const typeMeta = {
    lesson: { label: '📖 درس', cls: 'type-lesson', btn: 'قراءة الدرس' },
    summary: { label: '📝 ملخص', cls: 'type-summary', btn: 'مطالعة الملخص' },
    exercise: { label: '✍️ تمرين + حل', cls: 'type-exercise', btn: 'فتح التمرين والحل' }
  };

  grid.innerHTML = filtered
    .map((item, idx) => {
      const meta = typeMeta[item.category] || typeMeta.lesson;
      return `
        <article class="item-card" style="animation-delay: ${idx * 0.05}s">
          <div>
            <div class="item-top">
              <span class="type-badge ${meta.cls}">${meta.label}</span>
              <span class="unit-label">${escapeHTML(item.unit)}</span>
            </div>
            <h4>${escapeHTML(item.title)}</h4>
            <p class="item-excerpt">${escapeHTML(item.content)}</p>
          </div>
          <div class="item-actions">
            <button class="btn-read" onclick="openViewModal('${item.id}')">${meta.btn} ←</button>
            ${item.isCustom ? `<button class="btn-delete" onclick="deleteItem('${item.id}')">حذف</button>` : ''}
          </div>
        </article>
      `;
    })
    .join('');
}

/* =========================================================
   4. النوافذ المنبثقة (عرض الدرس/التمرين وإضافة محتوى)
   ========================================================= */
function openViewModal(id) {
  const item = contentList.find(i => i.id === id);
  if (!item) return;

  document.getElementById('viewModalMeta').textContent = `${levelInfoMap[item.level].badge} • ${item.unit}`;
  document.getElementById('viewModalTitle').textContent = item.title;

  let bodyHTML = `<div class="lesson-article">${escapeHTML(item.content)}</div>`;

  if (item.category === 'exercise' && item.solution) {
    bodyHTML += `
      <div class="solution-box">
        <button class="btn-primary" id="toggleSolBtn" onclick="toggleSolution()">👁️ إظهار الحل النموذجي</button>
        <div class="solution-content hidden" id="solutionContent">${escapeHTML(item.solution)}</div>
      </div>
    `;
  }

  document.getElementById('viewModalBody').innerHTML = bodyHTML;
  document.getElementById('viewModal').classList.add('open');
}

function toggleSolution() {
  const sol = document.getElementById('solutionContent');
  const btn = document.getElementById('toggleSolBtn');
  if (!sol || !btn) return;
  const isHidden = sol.classList.toggle('hidden');
  btn.textContent = isHidden ? '👁️ إظهار الحل النموذجي' : '🙈 إخفاء الحل النموذجي';
}

function openAddModal() {
  document.getElementById('newLevel').value = currentLevel;
  toggleSolutionField();
  document.getElementById('addModal').classList.add('open');
}

function toggleSolutionField() {
  const cat = document.getElementById('newCategory').value;
  document.getElementById('solutionFieldGroup').classList.toggle('hidden', cat !== 'exercise');
}

function handleAddContent(event) {
  event.preventDefault();
  const level = document.getElementById('newLevel').value;
  const category = document.getElementById('newCategory').value;
  const unit = document.getElementById('newUnit').value.trim();
  const title = document.getElementById('newTitle').value.trim();
  const content = document.getElementById('newContent').value.trim();
  const solution = document.getElementById('newSolution').value.trim();

  const newItem = {
    id: 'custom-' + Date.now(),
    level,
    category,
    unit,
    title,
    content,
    solution: category === 'exercise' ? solution : '',
    isCustom: true
  };

  contentList.unshift(newItem);
  saveContent();

  event.target.reset();
  closeModal('addModal');
  switchLevel(level);
}

function deleteItem(id) {
  contentList = contentList.filter(item => item.id !== id);
  saveContent();
  renderContent();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
}

function closeModalOnBackdrop(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* =========================================================
   5. توليد حلزون الـ ADN والخلفية الخلوية المتحركة (Canvas)
   ========================================================= */
function buildDnaHelix() {
  const stage = document.getElementById('dnaStage');
  if (!stage) return;
  const pairsCount = 11;
  let html = '';
  for (let i = 0; i < pairsCount; i++) {
    const delay = (i * -0.24).toFixed(2);
    html += `
      <div class="dna-pair">
        <span class="dna-strand-left" style="animation-delay: ${delay}s"></span>
        <span class="dna-bond" style="animation-delay: ${delay}s"></span>
        <span class="dna-strand-right" style="animation-delay: ${delay}s"></span>
      </div>
    `;
  }
  stage.innerHTML = html;
}

function initBioCanvas() {
  const canvas = document.getElementById('bio-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // خلايا وجزيئات حيوية تسبح بنعومة في الخلفية
  const cells = Array.from({ length: 24 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 12 + Math.random() * 24,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    hasNucleus: Math.random() > 0.35
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const c of cells) {
      c.x += c.vx;
      c.y += c.vy;

      if (c.x < -40) c.x = width + 40;
      if (c.x > width + 40) c.x = -40;
      if (c.y < -40) c.y = height + 40;
      if (c.y > height + 40) c.y = -40;

      // الغشاء الهيولي للخلية
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.045)';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(13, 148, 136, 0.14)';
      ctx.stroke();

      // النواة داخل الخلية
      if (c.hasNucleus) {
        ctx.beginPath();
        ctx.arc(c.x + c.r * 0.18, c.y - c.r * 0.12, c.r * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(5, 150, 105, 0.09)';
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* =========================================================
   6. تشغيل الموقع عند التحميل
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  buildDnaHelix();
  initBioCanvas();
  renderContent();

  // زر القائمة للهاتف
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
  }

  // إظهار العناصر تدريجياً عند التمرير
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
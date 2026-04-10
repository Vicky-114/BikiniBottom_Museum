const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');

const languages = {
    en: {
        translation: {
            "nav": {
                "fact_label": "Fact of Bikini Bottom & Bikini Atoll",
                "fact_short": "Fact",
                "char_label": "All Character in real life\nand their personality",
                "char_short": "Characters",
                "loc_label": "All location in Bikini Bottom",
                "loc_short": "Locations",
                "food_label": "Food in Bikini Bottom",
                "food_short": "Food",
                "game_label": "Game related with Sponge BOB",
                "game_short": "Game",
                "home": "Home",
                "menu": "Menu"
            },
            "home": {
                "title_part1": "\"Living in a Pineapple Under the Sea\":",
                "title_part2": "The Secret Formula of SpongeBob",
                "footer": "🧽 Bikini Bottom Museum"
            },
            "bikini_bottom": {
                "title": "Bikini Bottom & Bikini Atoll",
                "bb_title": "Bikini Bottom",
                "bb_desc": "Bikini Bottom is the main setting of the SpongeBob SquarePants series, located at the bottom of the Pacific Ocean. The city boasts a thriving economy, its own transit system, and distinct districts like Downtown and Kelp Forest. The creator, Stephen Hillenburg, used his background in marine biology to blend real aquatic life with cartoon absurdity.",
                "bb_point1": "Population primarily consists of anthropomorphic marine life",
                "bb_point2": "Features fully functioning infrastructure and businesses",
                "bb_point3": "Ecologically accurate (mostly) despite the absurd physics",
                "ba_title": "Bikini Atoll",
                "ba_desc": "Bikini Atoll is a real-world coral reef in the Marshall Islands. Between 1946 and 1958, it was the site of Operation Crossroads—a series of 23 nuclear tests conducted by the US military. This historical dark past spawned a massive fan theory: that the residents of Bikini Bottom are actually mutated marine creatures resulting from the radiation.",
                "ba_point1": "Real-world geographical location in the Pacific",
                "ba_point2": "Site of Operation Crossroads (23 nuclear detonations)",
                "ba_point3": "The basis for mutant fan theories surrounding the characters",
                "fun_fact": "💡 Fun Fact: The name \"Bikini Atoll\" actually comes from the Marshallese name \"Pikinni\", meaning \"coconut place\". It also inspired the name of the two-piece swimsuit introduced globally in 1946, named explicitly after the explosive atomic tests!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll  !",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "Characters in Real Life",
                "back": "Back to Characters",
                "personality": "Personality & Biology"
            },
            "locations": {
                "title": "📍 Locations in Bikini Bottom",
                "back": "Back to Locations"
            },
            "food": {
                "title": "🍔 Food of Bikini Bottom",
                "back": "Back to Food"
            },
            "game": {
                "title": "SpongeBob Games",
                "desc": "Test your skills in the Bikini Bottom Residence Test!"
            }
        }
    },
    "zh-CN": {
        translation: {
            "nav": {
                "fact_label": "比奇堡与比基尼环礁的真相",
                "fact_short": "事实",
                "char_label": "所有角色在现实中\n以及他们的性格",
                "char_short": "角色",
                "loc_label": "比奇堡的所有地点",
                "loc_short": "地点",
                "food_label": "比奇堡的美食",
                "food_short": "美食",
                "game_label": "海绵宝宝相关游戏",
                "game_short": "游戏",
                "home": "主页",
                "menu": "菜单"
            },
            "home": {
                "title_part1": "“住在深海的大菠萝里”:",
                "title_part2": "海绵宝宝的神秘配方",
                "footer": "🧽 比奇堡博物馆"
            },
            "bikini_bottom": {
                "title": "比奇堡 & 比基尼环礁",
                "bb_title": "比奇堡",
                "bb_desc": "比奇堡是《海绵宝宝》系列的主要背景设定，位于太平洋海底。这座城市拥有繁荣的经济、自己的交通系统，以及市中心和海带森林等独特区域。创作者斯蒂芬·海伦伯格利用他海洋生物学的背景，将真实的海洋生物与卡通的荒诞完美结合。",
                "bb_point1": "人口主要由拟人化的海洋生物组成",
                "bb_point2": "拥有运转完善的基础设施和商业",
                "bb_point3": "尽管物理法则荒谬，但在生态学上（大致）准确",
                "ba_title": "比基尼环礁",
                "ba_desc": "比基尼环礁是位于马绍尔群岛的真实珊瑚礁。在1946年至1958年间，它是“十字路口行动”的所在地——美国军方在此进行了23次核试验。这段黑暗的历史催生了一个庞大的粉丝理论：比奇堡的居民实际上是由辐射变异的海洋生物。",
                "ba_point1": "位于太平洋的真实地理位置",
                "ba_point2": "“十字路口行动”的所在地（23次核武器引爆）",
                "ba_point3": "关于角色变异的粉丝理论的基础",
                "fun_fact": "💡 趣闻：“比基尼环礁”这个名字实际上来自马绍尔语的“Pikinni”，意为“椰子之乡”。它还启发了1946年在全球推出的两件套比基尼泳衣的命名（明确是以原子弹爆炸试验命名的）！",

                "connection_title": "暗黑真相：天空之花",
                "connection_text": "你知道吗？比奇堡天空中经常漂浮的色彩斑斓的“花朵”，并不只是普通的云彩——它们实际上代表着比基尼环礁核试验后残留的核辐射污染物和油污  ！",
                "read_more": "阅读深度解析",
                "hide_analysis": "收起深度解析",
                "thesis_statement_title": "核心理念",
                "thesis_statement_text": "为什么《海绵宝宝》能在不同世代和文化中产生全球吸引力？本项目探讨了该节目的角色设计、视觉与叙事的荒诞主义以及哲学底色（尤其是荒诞派幽默）如何与多样化的观众产生情感共鸣。它研究了《海绵宝宝》的视觉语言、存在主义讽刺和跨文化适应性如何使其既成为一部喜剧作品，又成为批判性社会评论的典范。",
                "thesis_proposal_title": "深度剖析：探索荒诞世界",
                "thesis_proposal_p1": "本论文通过分析《海绵宝宝》融合荒诞幽默、独特的角色设计和跨文化叙事技巧的方式，探讨其持久的受欢迎程度和哲学深度。该节目最初于1999年播出，二十多年来一直是具有文化标志性的作品，它超越了许多同时代的作品，并适应了观众群体敏感度的变化。本研究认为，该节目的长寿不仅仅是表面喜剧效果的结果，更源于其对存在主义荒诞、现代生活批判以及创新视觉语言的复杂层次叠加。",
                "thesis_proposal_p2": "《海绵宝宝》的核心体现了荒诞主义哲学的关键原则。剧集经常将角色置于不合逻辑的混乱场景中，这些场景反映了像阿尔贝·加缪和塞缪尔·贝克特等作家作品中经常探讨的随机性和无意义感。然而，海绵宝宝并没有绝望，而是以坚定不移的乐观精神拥抱这些荒诞。这种态度不仅使他区别于其他动画主角，而且还以一种易懂幽默的方式，巧妙地向无论老少的观众介绍了存在主义主题。",
                "thesis_proposal_p3": "在视觉上，该节目利用高饱和度颜色、简单的几何形状和夸张的表情来打造极具辨识度的角色，这些角色的心理特征通过设计传达出来。海绵宝宝方形的身体、鲜艳的黄色和精力充沛的动作在视觉上强化了他孩童般的热情和韧性。相比之下，像章鱼哥这样的角色的设计使用了下垂的形状和暗淡的色调来表现愤世嫉俗和疲惫。有意识地使用颜色、形状和纹理作为必不可少的讲故事手段，编码了跨越文化界限的情感潜台词。",
                "thesis_proposal_p4": "文化适应性是《海绵宝宝》能在全球范围内取得成功的另一个秘诀。通过本地化、配音和迷因化等实践，该节目跨越了国界，同时保持了其主题完整性。改编往往会调整俚语、幽默和社会暗示以适应当地人的情感，而不会淡化潜在的存在主义荒诞。在互联网时代，《海绵宝宝》进一步演变成丰富的表情包来源，其静态图像和流行语提炼了诸如存在主义恐惧、荒诞的欢乐和讽刺的超然态度等复杂情感，完美契合了当代情感表达的方式。",
                "thesis_proposal_p5": "此外，《海绵宝宝》反映了资本主义、工作过劳和社会异化等现实世界的问题。蟹堡王餐厅的反复出现、海绵宝宝对他那份最低薪资工作的无尽热情、以及蟹老板对利润的病态追求，都是对现代劳动文化的讽刺性致敬。通过将这些批评置于一个异想天开的海底世界中，该剧实现了跨世代的吸引力：儿童享受其中的闹剧幽默，而成年人则能识别出更尖锐的社会经济评论。",
                "thesis_proposal_p6": "通过近距离的视觉和叙事分析，本论文揭示了《海绵宝宝》不仅作为一种娱乐存在，而且作为一种具有深度层次的社会哲学文本而运作。文章认为，该系列结合了荒诞派的韧性、富有表现力的视觉设计和文化流动性，使其在一个被情绪劳动、数字饱和和集体存在主义质疑所定义的时代中，能够持久地作为全球产生共鸣的象征。",

            },
            "characters": {
                "title": "现实生活中的角色",
                "back": "返回角色列表",
                "personality": "性格与生物学"
            },
            "locations": {
                "title": "📍 比奇堡的地点",
                "back": "返回地点列表"
            },
            "food": {
                "title": "🍔 比奇堡的美食",
                "back": "返回美食列表"
            },
            "game": {
                "title": "海绵宝宝游戏",
                "desc": "快来参加比奇堡居住测试，展现你的实力！"
            }
        }
    },
    "zh-TW": {
        translation: {
            "nav": {
                "fact_label": "比奇堡與比基尼環礁的真相",
                "fact_short": "事實",
                "char_label": "所有角色在現實中\n以及他們的性格",
                "char_short": "角色",
                "loc_label": "比奇堡的所有地點",
                "loc_short": "地點",
                "food_label": "比奇堡的美食",
                "food_short": "美食",
                "game_label": "海綿寶寶相關遊戲",
                "game_short": "遊戲",
                "home": "主頁",
                "menu": "菜單"
            },
            "home": {
                "title_part1": "“住在深海的大鳳梨裡”:",
                "title_part2": "海綿寶寶的神秘配方",
                "footer": "🧽 比奇堡博物館"
            },
            "bikini_bottom": {
                "title": "比奇堡 & 比基尼環礁",
                "bb_title": "比奇堡",
                "bb_desc": "比奇堡是《海綿寶寶》系列的主要背景設定，位於太平洋海底。這座城市擁有繁榮的經濟、自己的交通系統，以及市中心和海帶森林等獨特區域。創作者史蒂芬·海倫伯格利用他海洋生物學的背景，將真實的海洋生物與卡通的荒誕完美結合。",
                "bb_point1": "人口主要由擬人化的海洋生物組成",
                "bb_point2": "擁有運轉完善的基礎設施和商業",
                "bb_point3": "儘管物理法則荒謬，但在生態學上（大致）準確",
                "ba_title": "比基尼環礁",
                "ba_desc": "比基尼環礁是位於馬紹爾群島的真實珊瑚礁。在1946年至1958年間，它是“十字路口行動”的所在地——美國軍方在此進行了23次核試驗。這段黑暗的歷史催生了一個龐大的粉絲理論：比奇堡的居民實際上是由輻射變異的海洋生物。",
                "ba_point1": "位於太平洋的真實地理位置",
                "ba_point2": "“十字路口行動”的所在地（23次核武器引爆）",
                "ba_point3": "關於角色變異的粉絲理論的基礎",
                "fun_fact": "💡 趣聞：“比基尼環礁”這個名字實際上來自馬紹爾語的“Pikinni”，意為“椰子之鄉”。它還啟發了1946年在全球推出的兩件套比基尼泳衣的命名（明確是以原子彈爆炸試驗命名的）！",

                "connection_title": "暗黑真相：天空之花",
                "connection_text": "你知道吗？比奇堡天空中经常漂浮的色彩斑斓的“花朵”，并不只是普通的云彩——它们实际上代表着比基尼环礁核试验后残留的核辐射污染物和油污！",
                "read_more": "阅读深度解析",
                "hide_analysis": "收起深度解析",
                "thesis_statement_title": "核心理念",
                "thesis_statement_text": "为什么《海绵宝宝》能在不同世代和文化中产生全球吸引力？本项目探讨了该节目的角色设计、视觉与叙事的荒诞主义以及哲学底色（尤其是荒诞派幽默）如何与多样化的观众产生情感共鸣。它研究了《海绵宝宝》的视觉语言、存在主义讽刺和跨文化适应性如何使其既成为一部喜剧作品，又成为批判性社会评论的典范。",
                "thesis_proposal_title": "深度剖析：探索荒诞世界",
                "thesis_proposal_p1": "本论文通过分析《海绵宝宝》融合荒诞幽默、独特的角色设计和跨文化叙事技巧的方式，探讨其持久的受欢迎程度和哲学深度。该节目最初于1999年播出，二十多年来一直是具有文化标志性的作品，它超越了许多同时代的作品，并适应了观众群体敏感度的变化。本研究认为，该节目的长寿不仅仅是表面喜剧效果的结果，更源于其对存在主义荒诞、现代生活批判以及创新视觉语言的复杂层次叠加。",
                "thesis_proposal_p2": "《海绵宝宝》的核心体现了荒诞主义哲学的关键原则。剧集经常将角色置于不合逻辑的混乱场景中，这些场景反映了像阿尔贝·加缪和塞缪尔·贝克特等作家作品中经常探讨的随机性和无意义感。然而，海绵宝宝并没有绝望，而是以坚定不移的乐观精神拥抱这些荒诞。这种态度不仅使他区别于其他动画主角，而且还以一种易懂幽默的方式，巧妙地向无论老少的观众介绍了存在主义主题。",
                "thesis_proposal_p3": "在视觉上，该节目利用高饱和度颜色、简单的几何形状和夸张的表情来打造极具辨识度的角色，这些角色的心理特征通过设计传达出来。海绵宝宝方形的身体、鲜艳的黄色和精力充沛的动作在视觉上强化了他孩童般的热情和韧性。相比之下，像章鱼哥这样的角色的设计使用了下垂的形状和暗淡的色调来表现愤世嫉俗和疲惫。有意识地使用颜色、形状和纹理作为必不可少的讲故事手段，编码了跨越文化界限的情感潜台词。",
                "thesis_proposal_p4": "文化适应性是《海绵宝宝》能在全球范围内取得成功的另一个秘诀。通过本地化、配音和迷因化等实践，该节目跨越了国界，同时保持了其主题完整性。改编往往会调整俚语、幽默和社会暗示以适应当地人的情感，而不会淡化潜在的存在主义荒诞。在互联网时代，《海绵宝宝》进一步演变成丰富的表情包来源，其静态图像和流行语提炼了诸如存在主义恐惧、荒诞的欢乐和讽刺的超然态度等复杂情感，完美契合了当代情感表达的方式。",
                "thesis_proposal_p5": "此外，《海绵宝宝》反映了资本主义、工作过劳和社会异化等现实世界的问题。蟹堡王餐厅的反复出现、海绵宝宝对他那份最低薪资工作的无尽热情、以及蟹老板对利润的病态追求，都是对现代劳动文化的讽刺性致敬。通过将这些批评置于一个异想天开的海底世界中，该剧实现了跨世代的吸引力：儿童享受其中的闹剧幽默，而成年人则能识别出更尖锐的社会经济评论。",
                "thesis_proposal_p6": "通过近距离的视觉和叙事分析，本论文揭示了《海绵宝宝》不仅作为一种娱乐存在，而且作为一种具有深度层次的社会哲学文本而运作。文章认为，该系列结合了荒诞派的韧性、富有表现力的视觉设计和文化流动性，使其在一个被情绪劳动、数字饱和和集体存在主义质疑所定义的时代中，能够持久地作为全球产生共鸣的象征。",

            },
            "characters": {
                "title": "現實生活中的角色",
                "back": "返回角色列表",
                "personality": "性格與生物學"
            },
            "locations": {
                "title": "📍 比奇堡的地點",
                "back": "返回地點列表"
            },
            "food": {
                "title": "🍔 比奇堡的美食",
                "back": "返回美食列表"
            },
            "game": {
                "title": "海綿寶寶遊戲",
                "desc": "快來參加比奇堡居住測試，展現你的實力！"
            }
        }
    },
    "ja": {
        translation: {
            "nav": {
                "fact_label": "ビキニタウンとビキニ環礁の事実",
                "fact_short": "事実",
                "char_label": "現実のキャラクター\nと彼らの性格",
                "char_short": "キャラクター",
                "loc_label": "ビキニタウンのすべての場所",
                "loc_short": "場所",
                "food_label": "ビキニタウンの食べ物",
                "food_short": "食べ物",
                "game_label": "スポンジボブのゲーム",
                "game_short": "ゲーム",
                "home": "ホーム",
                "menu": "メニュー"
            },
            "home": {
                "title_part1": "「深い海の底にあるパイナップルに住んでいる」:",
                "title_part2": "スポンジ・ボブの秘密のレシピ",
                "footer": "🧽 ビキニタウン博物館"
            },
            "bikini_bottom": {
                "title": "ビキニタウン & ビキニ環礁",
                "bb_title": "ビキニタウン",
                "bb_desc": "ビキニタウンはスポンジ・ボブシリーズの主な舞台であり、太平洋の底に位置しています。活発な経済、独自の交通システム、そしてダウンタウンや海藻の森のような地域があります。製作者のステファン・ヒーレンバーグは海洋生物学者としての背景を活かし、現実の水生生物とアニメの不条理さを融合させました。",
                "bb_point1": "住民は主に擬人化された海洋生物",
                "bb_point2": "完全に機能するインフラやビジネスを備えている",
                "bb_point3": "不条理な物理法則にもかかわらず、生態学的には (ほぼ) 正確",
                "ba_title": "ビキニ環礁",
                "ba_desc": "ビキニ環礁はマーシャル諸島にある現実のサンゴ礁です。1946年から1958年の間、クロスロード作戦（米軍によって行われた23回の核実験）の舞台でした。この暗い歴史的過去は、ビキニタウンの住民が放射線によって変異した海洋生物であるという巨大なファン理論を生み出しました。",
                "ba_point1": "太平洋における現実の地理的位置",
                "ba_point2": "クロスロード作戦の舞台 (23回の核爆発)",
                "ba_point3": "キャラクターの変異に関するファン理論の基礎",
                "fun_fact": "💡 豆知識：「ビキニ環礁」という名前は、実際のマーシャル語の「ピキンニ（ココナッツの場所）」に由来します。また、1946年に世界的に導入されたツーピース水着のビキニは、爆発的な原子実験にちなんで名付けられました！",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "現実生活のキャラクター",
                "back": "キャラクターに戻る",
                "personality": "性格と生物学"
            },
            "locations": {
                "title": "📍 ビキニタウンの場所",
                "back": "場所に戻る"
            },
            "food": {
                "title": "🍔 ビキニタウンの食べ物",
                "back": "食べ物に戻る"
            },
            "game": {
                "title": "スポンジボブ ゲーム",
                "desc": "ビキニタウン居住テストであなたのスキルを試そう！"
            }
        }
    },
    "ko": {
        translation: {
            "nav": {
                "fact_label": "비키니 시티와 비키니 환초의 진실",
                "fact_short": "사실",
                "char_label": "현실의 모든 캐릭터와\n그들의 성격",
                "char_short": "캐릭터",
                "loc_label": "비키니 시티의 모든 장소",
                "loc_short": "장소",
                "food_label": "비키니 시티의 음식",
                "food_short": "음식",
                "game_label": "스폰지밥 관련 게임",
                "game_short": "게임",
                "home": "홈",
                "menu": "메뉴"
            },
            "home": {
                "title_part1": "\"깊은 바다 속 파인애플 집에서 사는\":",
                "title_part2": "스폰지밥의 비밀 레시피",
                "footer": "🧽 비키니 시티 박물관"
            },
            "bikini_bottom": {
                "title": "비키니 시티 & 비키니 환초",
                "bb_title": "비키니 시티",
                "bb_desc": "비키니 시티는 스폰지밥 시리즈의 주요 배경으로, 태평양 해저에 위치해 있습니다. 이 도시는 번영하는 경제, 자체 교통 시스템, 다운타운과 켈프 숲과 같은 독특한 지역을 자랑합니다. 원작자 스티븐 힐렌버그는 해양 생물학적 배경을 바탕으로 실제 해양 생물과 만화적인 부조리를 혼합했습니다.",
                "bb_point1": "인구는 주로 의인화된 해양 생물로 구성",
                "bb_point2": "완전히 작동하는 인프라와 기업",
                "bb_point3": "부조리한 물리 법칙에도 불구하고 생태학적으로 (대부분) 정확함",
                "ba_title": "비키니 환초",
                "ba_desc": "비키니 환초는 마셜 제도에 있는 실제 산호초입니다. 1946년부터 1958년까지 미국 군대가 실시한 23번의 핵실험인 크로스로드 작전의 장소였습니다. 이 어두운 역사적 과거는 비키니 시티의 주민들이 방사능으로 인해 돌연변이된 해양 생물이라는 거대한 팬 이론을 낳았습니다.",
                "ba_point1": "태평양의 실제 지리적 위치",
                "ba_point2": "크로스로드 작전 (23번의 핵폭발) 장소",
                "ba_point3": "캐릭터 돌연변이 팬 이론의 기초",
                "fun_fact": "💡 재미있는 사실: '비키니 환초'라는 이름은 실제로 마셜어 '피키니(코코넛 장소)'에서 유래했습니다. 또한 1946년에 전 세계에 소개된 투피스 수영복(비키니)의 이름은 폭발적인 원자 실험의 이름을 따서 명명되었습니다!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "현실에서의 캐릭터",
                "back": "캐릭터로 돌아가기",
                "personality": "성격 & 생물학"
            },
            "locations": {
                "title": "📍 비키니 시티의 장소",
                "back": "장소로 돌아가기"
            },
            "food": {
                "title": "🍔 비키니 시티의 음식",
                "back": "음식으로 돌아가기"
            },
            "game": {
                "title": "스폰지밥 게임",
                "desc": "비키니 시티 거주 테스트에서 실력을 테스트해보세요!"
            }
        }
    },
    "es": {
        translation: {
            "nav": {
                "fact_label": "Datos sobre Fondo de Bikini y el Atolón",
                "fact_short": "Datos",
                "char_label": "Todos los personajes en la vida real y su personalidad",
                "char_short": "Personajes",
                "loc_label": "Todas las ubicaciones en Fondo de Bikini",
                "loc_short": "Ubicaciones",
                "food_label": "Comida en Fondo de Bikini",
                "food_short": "Comida",
                "game_label": "Juegos relacionados con Bob Esponja",
                "game_short": "Juegos",
                "home": "Inicio",
                "menu": "Menú"
            },
            "home": {
                "title_part1": "\"Vive en una piña debajo del mar\":",
                "title_part2": "La Fórmula Secreta de Bob Esponja",
                "footer": "🧽 Museo de Fondo de Bikini"
            },
            "bikini_bottom": {
                "title": "Fondo de Bikini y Atolón Bikini",
                "bb_title": "Fondo de Bikini",
                "bb_desc": "Fondo de Bikini es el escenario principal de la serie Bob Esponja, ubicado en el fondo del Océano Pacífico. Cuenta con una economía próspera, sistema de tránsito propio y distritos distintos. El creador, Stephen Hillenburg, usó su formación en biología marina para mezclar vida acuática real con lo absurdo animado.",
                "bb_point1": "Población consiste principalmente en vida marina antropomórfica",
                "bb_point2": "Cuenta con infraestructura y negocios en pleno funcionamiento",
                "bb_point3": "Ecológicamente preciso (mayormente) a pesar de la física absurda",
                "ba_title": "Atolón Bikini",
                "ba_desc": "El Atolón Bikini es un arrecife de coral del mundo real en las Islas Marshall. Entre 1946 y 1958, fue el sitio de la Operación Crossroads, una serie de 23 pruebas nucleares realizadas por militares de EE. UU. Este oscuro pasado histórico generó una teoría: los residentes de Fondo de Bikini son criaturas mutadas por la radiación.",
                "ba_point1": "Ubicación geográfica real en el Pacífico",
                "ba_point2": "Sitio de la Operación Crossroads (23 detonaciones nucleares)",
                "ba_point3": "La base de las teorías sobre mutantes",
                "fun_fact": "💡 Dato curioso: El nombre \"Atolón Bikini\" en realidad proviene del nombre marshalés \"Pikinni\" (lugar de cocos). ¡También inspiró el nombre del traje de baño de dos piezas introducido en 1946, nombrado en honor a las explosivas pruebas atómicas!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "Personajes en la Vida Real",
                "back": "Volver a Personajes",
                "personality": "Personalidad y Biología"
            },
            "locations": {
                "title": "📍 Ubicaciones en Fondo de Bikini",
                "back": "Volver a Ubicaciones"
            },
            "food": {
                "title": "🍔 Comida de Fondo de Bikini",
                "back": "Volver a Comida"
            },
            "game": {
                "title": "Juegos de Bob Esponja",
                "desc": "¡Pon a prueba tus habilidades en el Test de Residencia de Fondo de Bikini!"
            }
        }
    },
    "fr": {
        translation: {
            "nav": {
                "fact_label": "Faits sur Bikini Bottom et l'atoll de Bikini",
                "fact_short": "Faits",
                "char_label": "Tous les personnages en vrai\net leur personnalité",
                "char_short": "Personnages",
                "loc_label": "Tous les lieux de Bikini Bottom",
                "loc_short": "Lieux",
                "food_label": "Nourriture à Bikini Bottom",
                "food_short": "Nourriture",
                "game_label": "Jeux liés à Bob l'éponge",
                "game_short": "Jeux",
                "home": "Accueil",
                "menu": "Menu"
            },
            "home": {
                "title_part1": "« Qui vit dans un ananas dans la mer »:",
                "title_part2": "La recette secrète de Bob l'éponge",
                "footer": "🧽 Musée de Bikini Bottom"
            },
            "bikini_bottom": {
                "title": "Bikini Bottom et l'atoll de Bikini",
                "bb_title": "Bikini Bottom",
                "bb_desc": "Bikini Bottom est le cadre principal de la série Bob l'éponge, situé au fond de l'océan Pacifique. Il a une économie prospère, un système de transport en commun et des quartiers distincts. Le créateur, Stephen Hillenburg, a utilisé sa formation en biologie marine pour mélanger la vie aquatique réelle avec l'absurdité du dessin animé.",
                "bb_point1": "La population se compose de vie marine anthropomorphique",
                "bb_point2": "Comprend des infrastructures et des entreprises",
                "bb_point3": "Écologiquement précis (en grande partie) malgré la physique",
                "ba_title": "Atoll de Bikini",
                "ba_desc": "L'atoll de Bikini est un véritable récif corallien des îles Marshall. Entre 1946 et 1958, c'était le site de l'opération Crossroads — 23 essais nucléaires. Ce sombre passé historique a engendré une théorie de fans massive : les résidents de Bikini Bottom sont en réalité des créatures marines mutées.",
                "ba_point1": "Emplacement géographique réel",
                "ba_point2": "Site de l'opération Crossroads (23 détonations)",
                "ba_point3": "Base des théories de mutants entourant les personnages",
                "fun_fact": "💡 Fait amusant: Le nom « Atoll de Bikini » vient du nom marshallais « Pikinni » (lieu des noix de coco). Il a également inspiré le nom du maillot de bain deux pièces, nommé d'après les tests atomiques en 1946!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "Les personnages en vrai",
                "back": "Retour aux personnages",
                "personality": "Personnalité et biologie"
            },
            "locations": {
                "title": "📍 Lieux à Bikini Bottom",
                "back": "Retour aux lieux"
            },
            "food": {
                "title": "🍔 Nourriture de Bikini Bottom",
                "back": "Retour à la nourriture"
            },
            "game": {
                "title": "Jeux Bob l'éponge",
                "desc": "Testez vos compétences dans le test de résidence de Bikini Bottom !"
            }
        }
    },
    "de": {
        translation: {
            "nav": {
                "fact_label": "Fakten über Bikini Bottom & Bikini Atoll",
                "fact_short": "Fakten",
                "char_label": "Alle Charaktere im wahren Leben\nund ihre Persönlichkeit",
                "char_short": "Charaktere",
                "loc_label": "Alle Orte in Bikini Bottom",
                "loc_short": "Orte",
                "food_label": "Essen in Bikini Bottom",
                "food_short": "Essen",
                "game_label": "Spiele im Zusammenhang mit SpongeBob",
                "game_short": "Spiele",
                "home": "Startseite",
                "menu": "Menü"
            },
            "home": {
                "title_part1": "„Wer wohnt in der Ananas ganz tief im Meer“:",
                "title_part2": "Die Geheimformel von SpongeBob",
                "footer": "🧽 Bikini Bottom Museum"
            },
            "bikini_bottom": {
                "title": "Bikini Bottom & Bikini-Atoll",
                "bb_title": "Bikini Bottom",
                "bb_desc": "Bikini Bottom ist der Hauptschauplatz der SpongeBob Schwammkopf Serie, tief unten im Pazifik. Es hat eine florierende Wirtschaft, eigene Verkehrsmittel und eigene Bezirke. Der Schöpfer, Stephen Hillenburg, nutzte seinen Hintergrund in der Meeresbiologie, um echtes Meeresleben mit Zeichentrick-Absurdität zu verbinden.",
                "bb_point1": "Bevölkerung besteht aus anthropomorphen Meeresbewohnern",
                "bb_point2": "Verfügt über funktionierende Infrastruktur und Geschäfte",
                "bb_point3": "Ökologisch (meist) genau trotz absurder Physik",
                "ba_title": "Bikini-Atoll",
                "ba_desc": "Das Bikini-Atoll ist ein echtes Korallenriff auf den Marshallinseln. Zwischen 1946 und 1958 war es der Ort der Operation Crossroads – einer Reihe von 23 Atomwaffentests durch das US-Militär. Diese dunkle Vergangenheit brachte eine Fantheorie hervor: Die Bewohner von Bikini Bottom sind mutierte Meerestiere.",
                "ba_point1": "Echter geografischer Ort im Pazifik",
                "ba_point2": "Ort der Operation Crossroads (23 Detonationen)",
                "ba_point3": "Grundlage für Mutantenphantheorien",
                "fun_fact": "💡 Wusstest du schon?: Der Name „Bikini-Atoll“ stammt vom marshallesischen Namen „Pikinni“ („Kokosnussort“). Er inspirierte auch den Namen des zweiteiligen Badeanzugs von 1946!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "Charaktere im wahren Leben",
                "back": "Zurück zu Charakteren",
                "personality": "Persönlichkeit & Biologie"
            },
            "locations": {
                "title": "📍 Orte in Bikini Bottom",
                "back": "Zurück zu Orten"
            },
            "food": {
                "title": "🍔 Essen in Bikini Bottom",
                "back": "Zurück zum Essen"
            },
            "game": {
                "title": "SpongeBob Spiele",
                "desc": "Teste dein Können im Bikini-Bottom-Residenz-Test!"
            }
        }
    },
    "ru": {
        translation: {
            "nav": {
                "fact_label": "Факты о Бикини Боттом и атолле Бикини",
                "fact_short": "Факты",
                "char_label": "Все персонажи в реальной жизни и их характер",
                "char_short": "Персонажи",
                "loc_label": "Все локации в Бикини Боттом",
                "loc_short": "Локации",
                "food_label": "Еда в Бикини Боттом",
                "food_short": "Еда",
                "game_label": "Игры про Губку Боба",
                "game_short": "Игры",
                "home": "Главная",
                "menu": "Меню"
            },
            "home": {
                "title_part1": "\"Кто проживает на дне океана\":",
                "title_part2": "Секретная формула Губки Боба",
                "footer": "🧽 Музей Бикини Боттом"
            },
            "bikini_bottom": {
                "title": "Бикини Боттом & Атолл Бикини",
                "bb_title": "Бикини Боттом",
                "bb_desc": "Бикини Боттом — главное место действия сериала «Губка Боб Квадратные Штаны», расположенное на дне Тихого океана. Город славится процветающей экономикой, собственной транспортной системой и районами. Создатель Стивен Хилленбург использовал свой опыт в морской биологии, чтобы совместить реальную водную жизнь с мультяшным абсурдом.",
                "bb_point1": "Население состоит из антропоморфной морской жизни",
                "bb_point2": "Включает полноценную инфраструктуру и предприятия",
                "bb_point3": "Экологически (по большей части) точный",
                "ba_title": "Атолл Бикини",
                "ba_desc": "Атолл Бикини - настоящий коралловый риф на Маршалловых островах. В период с 1946 по 1958 год это было место проведения операции «Перекресток» (Operation Crossroads) — 23 ядерных испытаний. Это темное историческое прошлое породило масштабную фанатскую теорию о том, что жители Бикини Боттом — мутировавшие морские существа.",
                "ba_point1": "Реальное географическое положение",
                "ba_point2": "Место проведения операции «Перекресток»",
                "ba_point3": "Основа для фанатских теорий о мутантах",
                "fun_fact": "💡 Занимательный факт: Название «Атолл Бикини» на самом деле происходит от маршаллезского названия «Pikinni» (кокосовое место). Это также вдохновило название раздельного купальника, представленного в 1946 году!",

                "connection_title": "The Dark Truth: Sky Flowers",
                "connection_text": "Did you know? The iconic, colorful 'sky flowers' seen floating above Bikini Bottom aren't just clouds—they are actually representing the residual nuclear fallout and oil pollution from the atomic bomb tests conducted at Bikini Atoll!",
                "read_more": "Explore Full Analysis",
                "hide_analysis": "Hide Analysis",
                "thesis_statement_title": "The Core Concept",
                "thesis_statement_text": "Why is SpongeBob SquarePants globally appealing across generations and cultures? This project explores how the show's character design, visual and narrative absurdism, and philosophical undertones (especially absurdist humor) create an emotional resonance with diverse audiences. It investigates how SpongeBob's visual language, existential satire, and cross-cultural adaptability make it both a comedic product and an example of critical social commentary.",
                "thesis_proposal_title": "Deep Dive: Exploring the Absurd World",
                "thesis_proposal_p1": "This thesis explores the sustained popularity and philosophical depth of SpongeBob SquarePants by analyzing its integration of absurdist humor, distinctive character design, and transcultural storytelling techniques. Originally airing in 1999, SpongeBob has remained a cultural fixture for over two decades, outlasting many contemporaries and adapting to shifting audience sensibilities. This research argues that the show's longevity is not merely a result of its surface-level comedy but stems from its sophisticated layering of existential absurdism, critiques of modern life, and innovative visual language.",
                "thesis_proposal_p2": "At its core, SpongeBob embodies key principles of absurdist philosophy. Episodes frequently place characters in illogical, chaotic scenarios that mirror the randomness and meaninglessness often explored in the works of writers like Albert Camus and Samuel Beckett. Yet rather than despair, SpongeBob embraces these absurdities with unyielding optimism. This attitude not only differentiates him from other animated protagonists but also subtly introduces audiences—both young and old—to existential themes in an accessible, humorous format.",
                "thesis_proposal_p3": "Visually, the show utilizes highly saturated colors, simple geometric forms, and exaggerated expressions to craft immediately recognizable characters whose psychological traits are communicated through design. SpongeBob's square shape, vibrant yellow hue, and energetic movements visually reinforce his childlike enthusiasm and resilience. In contrast, characters like Squidward are designed with droopier forms and muted tones to represent cynicism and fatigue. The conscious use of color, shape, and texture serves as an essential storytelling device, encoding emotional subtext that resonates across cultural boundaries.",
                "thesis_proposal_p4": "Cultural adaptability is another secret to SpongeBob's global success. Through practices such as localization, dubbing, and memeification, the show transcends national borders while maintaining its thematic integrity. Adaptations often adjust slang, humor, and social references to suit local sensibilities without diluting the underlying existential absurdism. In the age of the internet, SpongeBob has further evolved into a rich source of memes, with still images and catchphrases distilling complex emotions like existential dread, absurd joy, and ironic detachment—perfectly aligning with contemporary modes of emotional expression.",
                "thesis_proposal_p5": "Moreover, SpongeBob reflects real-world issues such as capitalism, work exhaustion, and social alienation. The recurring setting of the Krusty Krab restaurant, SpongeBob's endless enthusiasm for his minimum-wage job, and Mr. Krabs's obsessive pursuit of profit all serve as satirical nods to modern labor culture. By presenting these critiques within a whimsical underwater world, the show allows for multigenerational engagement: children enjoy the slapstick humor, while adults recognize the sharper socio-economic commentary.",
                "thesis_proposal_p6": "Through close visual and narrative analysis, this thesis uncovers how SpongeBob SquarePants operates not just as entertainment but as a deeply layered socio-philosophical text. It argues that the series' combination of absurdist resilience, expressive visual design, and cultural fluidity has enabled it to endure as a globally relatable icon in an era defined by emotional labor, digital saturation, and collective existential questioning.",

            },
            "characters": {
                "title": "Персонажи в реальной жизни",
                "back": "Назад к персонажам",
                "personality": "Личность и биология"
            },
            "locations": {
                "title": "📍 Локации Бикини Боттом",
                "back": "Назад к локациям"
            },
            "food": {
                "title": "🍔 Еда Бикини Боттом",
                "back": "Назад к еде"
            },
            "game": {
                "title": "Игры про Губку Боба",
                "desc": "Проверьте свои навыки в тесте на проживание в Бикини-Боттом!"
            }
        }
    }
};

if (!fs.existsSync(localesDir)) {
    fs.mkdirSync(localesDir);
}

Object.keys(languages).forEach(lang => {
    const langDir = path.join(localesDir, lang);
    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir);
    }
    fs.writeFileSync(
        path.join(langDir, 'translation.json'),
        JSON.stringify(languages[lang].translation, null, 2)
    );
    console.log(`Created ${lang}/translation.json`);
});

// books.js
const books = [
    {
        id: 1,
        name: {
            original: "קיצור תולדות האנושות",
            chinese: "人类简史",
            japanese: "サピエンス全史",
            english: "Sapiens: A Brief History of Humankind"
        },
        country: "以色列",
        language: "中文",
        author: "尤瓦尔·赫拉利",
        description: "《人类简史：从动物到上帝》由以色列历史学家尤瓦尔·赫拉利所著，于2011年出版。作者讲述了人类从石器时代至21世纪的演化与发展史，并将人类历史分为四个阶段：认知革命、农业革命、人类的融合统一与科学革命。该书深受贾德·戴蒙的《枪炮、病菌与钢铁》影响。自2011年希伯来文版出版以来，该书已被翻译为45种语言（2017年6月）。2014年，其中文版出版。2015年，该书获中国国家图书馆文津图书奖。2016年，获吴大猷科学普及著作奖翻译类金签奖。该书出版后获得的评价好坏参半。部分人类学家对该书的许多观点抱有怀疑和否定的态度，而公众对本书的评价基本上是正面的。",
        period: "-",
        link: "-"
    },
    {
        id: 2,
        name: {
            original: "中國，是地下這幫鼠族撐起來的(2018)",
            chinese: "中国，是地下这帮鼠族撑起来的",
            japanese: "-",
            english: "-"
        },
        country: "-",
        language: "中文",
        author: "Saint-paul, Patric(著),陳, 文瑶(译)",
        description: "-",
        period: "-",
        link: "-"
    },
    {
        id: 3,
        name: {
            original: "独生：中国最激进的社会工程实验(2016)",
            chinese: "独生：中国最激进的社会工程实验",
            japanese: "-",
            english: "-"
        },
        country: "美国",
        language: "中文",
        author: "方凤美",
        description: "普立兹新闻奖得主、国际特赦组织人权新闻奖得主。曾担任《华尔街日报》记者，著名报导包括9-11攻击事件后的纽约、二○○八年北京奥运前的中国转型过程，以及中国的农民工。被《外交政策》（Foreign Policy）杂志选为中美关系的五十名影响人物之一。离开记者岗位之后，曾任南加大传播学院讲师，现为新美国智库成员",
        period: "-",
        link: "-"
    },
    {
        id: 4,
        name: {
            original: "女ぎらい:ニッポンのミソジニー",
            chinese: "厌女",
            japanese: "-",
            english: "-"
        },
        country: "日本",
        language: "日文",
        author: "上野千鹤子",
        description: "-",
        period: "-",
        link: "-"
    },
    {
        id: 5,
        name: {
            original: "Everybody Lies",
            chinese: "人人都在说谎-赤裸裸的数据真相",
            japanese: "-",
            english: "-"
        },
        country: "-",
        language: "中文",
        author: "赛思·斯蒂芬斯--达维多维茨",
        description: "-",
        period: "-",
        link: "-"
    },
    {
        id: 6,
        name: {
            original: "-(2022)",
            chinese: "应得的权利：男性特权如何伤害女性",
            japanese: "-",
            english: "-"
        },
        country: "-",
        language: "中文",
        author: "凯特·曼恩",
        description: "-",
        period: "-",
        link: "-"
    },
    {
        id: 7,
        name: {
            original: "女人的胜利(1995)",
            chinese: "女人的胜利",
            japanese: "-",
            english: "Victory"
        },
        country: "中国",
        language: "中文",
        author: "余华",
        description: "-",
        period: "-",
        link: "-"
    },
    {
        id: 8,
        name: {
            original: "L'Arminuta(2018)",
            chinese: "被弃养的女孩",
            japanese: "-",
            english: "-"
        },
        country: "意大利",
        language: "中文",
        author: "[意]多娜泰拉·迪皮耶特兰托尼奥",
        description: "继“那不勒斯四部曲”之后，意大利又一现象级高分之作。",
        period: "-2025/02/26",
        link: "-"
    },
    {
        id: 9,
        name: {
            original: "La Porte Étroite(1909)",
            chinese: "窄门",
            japanese: "狭き門",
            english: "-"
        },
        country: "法国",
        language: "中文",
        author: "安德烈·纪德",
        description: "《窄门》是法国作家安德烈·纪德创作的中篇小说。小说描写主人公杰罗姆自小爱着表姐阿莉莎，阿莉莎虽然对杰罗姆也怀有同样的感情，但她恪守清教徒的自我约束，把感情深深埋在心底，最后积忧成疾，不幸身亡。在《窄门》中，纪德将爱情中的神秘主义体验推向极致，讲述了一段纯洁炙热、却又含着无边孤寂和无限辛酸滋味的爱情故事。",
        period: "2025/2/26-2025/3/10",
        link: "-"
    },
    {
        id: 10,
        name: {
            original: "沉默的大多数 (1996)",
            chinese: "沉默的大多数(杂文)",
            japanese: "-",
            english: "-"
        },
        country: "中国",
        language: "中文",
        author: "王小波",
        description: "《沉默的大多数》是中华人民共和国作家王小波最初发表于1996年第4期《东方》杂志上的杂文。该文于1997年由中国青年出版社出版发行。观点认为，作者在该作品中倾注了其对中国民众命运的关注，以反讽和幽默的手法直面生活，从一个轻松的角度来解构身边复杂的事态。",
        period: "2025/3/10-2025/3/25",
        link: "-"
    },
    {
        id: 11,
        name: {
            original: "海辺のカフカ(2002)",
            chinese: "海边的卡夫卡",
            japanese: "海辺のカフカ",
            english: "-"
        },
        country: "日本",
        language: "中文",
        author: "村上春树",
        description: "小说的主人公是一位自称名叫田村卡夫卡——作者始终未交代其真名的少年。他在十五岁生日前夜独自离家出走，乘坐夜行长途巴士远赴四国。出走的原因是为了逃避父亲所作的比俄底浦斯王还要可怕的预言：尔将弑父，将与尔母、尔姐交合。",
        period: "2025/3/25-",
        link: "-"
    }
];

const tableBody = document.querySelector("#book-table tbody");

books.forEach(book => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.innerHTML = `
        <strong>${book.name.original}</strong><br>
        <span>中文: ${book.name.chinese}</span><br>
        <span>日文: ${book.name.japanese}</span><br>
        <span>英文: ${book.name.english}</span>
    `;
    row.appendChild(nameCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = book.country;
    row.appendChild(countryCell);

    const languageCell = document.createElement("td");
    languageCell.textContent = book.language;
    row.appendChild(languageCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.className = "description";
    descriptionCell.textContent = book.description;
    row.appendChild(descriptionCell);

    const periodCell = document.createElement("td");
    periodCell.textContent = book.period;
    row.appendChild(periodCell);

    const linkCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = book.link;
    link.textContent = "暂无资源";
    link.target = "_blank";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    tableBody.appendChild(row);
});

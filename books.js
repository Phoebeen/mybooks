// books.js
const books = [
    {
        id: 1,
        name: {
            original: "Le Petit Prince",
            chinese: "小王子",
            japanese: "星の王子さま",
            english: "The Little Prince"
        },
        country: "法国",
        language: "法语",
        author: "安托万·德·圣-埃克苏佩里",
        description: "讲述了小王子从自己星球出发前往地球的过程中，所经历的各种冒险和感悟。",
        period: "2023-09-01 至 2023-09-10",
        link: "https://example.com/le-petit-prince"
    },
    {
        id: 2,
        name: {
            original: "ノルウェイの森",
            chinese: "挪威的森林",
            japanese: "ノルウェイの森",
            english: "Norwegian Wood"
        },
        country: "日本",
        language: "日语",
        author: "村上春树",
        description: "讲述了大学生渡边彻在东京的生活，以及他与两位女性之间的感情纠葛。",
        period: "2023-08-15 至 2023-08-25",
        link: "https://example.com/norwegian-wood"
    },
    {
        id: 3,
        name: {
            original: "To Kill a Mockingbird",
            chinese: "杀死一只知更鸟",
            japanese: "アラバマ物語",
            english: "To Kill a Mockingbird"
        },
        country: "美国",
        language: "英语",
        author: "哈珀·李",
        description: "通过一个小女孩的视角，揭示了美国南方的种族不平等和道德困境。",
        period: "2023-07-01 至 2023-07-10",
        link: "https://example.com/to-kill-a-mockingbird"
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
    link.textContent = "阅读资源";
    link.target = "_blank";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    tableBody.appendChild(row);
});

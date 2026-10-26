document.addEventListener("DOMContentLoaded", () => {
    const runnerValue = document.getElementById("runner-value");
    const encoreValue = document.getElementById("encore-value");
    const otherValue = document.getElementById("other-value");
    const calculateButton = document.getElementById("calculate-button");
    const resultArea = document.getElementById("result-area");
    const resultContent = document.getElementById("result-content");

    calculateButton.addEventListener("click", () => {
        const fields = [runnerValue, encoreValue, otherValue];

        if (fields.some(field => field.value.trim() === "")) {
            resultContent.textContent = "すべて入力してください。";
            resultArea.classList.add("show");
            return;
        }

        const [runner, encore, other] = fields.map(field => Number(field.value));

        if (fields.some(field => !Number.isFinite(Number(field.value))) ||
            [runner, encore, other].some(value => value < 0)) {
            resultContent.textContent = "0以上の正しい数値を入力してください。";
            resultArea.classList.add("show");
            return;
        }

        const actualEncore = encore + (encore - runner) * 2;
        let result;
        let explanation;

        if (other >= actualEncore) {
            result = "アンコールを取らない編成がおすすめ";
            explanation = `比較する編成の方が ${other - actualEncore} 高いです。`;
        } else {
            result = "アンコールを取る編成がおすすめ";
            explanation = `アンコールを取る編成の方が ${actualEncore - other} 高いです。`;
        }

        resultContent.replaceChildren();

        const container = document.createElement("div");
        container.className = "encore-result";

        const main = document.createElement("div");
        main.className = "encore-result-main";
        main.textContent = result;

        const value = document.createElement("div");
        value.className = "encore-result-value";
        value.append("実際に出るアンコール値：");

        const strong = document.createElement("strong");
        strong.textContent = String(actualEncore);
        value.append(strong);

        const paragraph = document.createElement("p");
        paragraph.textContent =
            `アンコール実効値は ${actualEncore}、比較する編成の実効値は ${other} です。${explanation}`;

        container.append(main, value, paragraph);
        resultContent.append(container);

        resultArea.classList.add("show");
        resultArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

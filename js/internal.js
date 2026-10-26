document.addEventListener("DOMContentLoaded", () => {
    const value1 = document.getElementById("value-1");
    const value2 = document.getElementById("value-2");
    const value3 = document.getElementById("value-3");
    const value4 = document.getElementById("value-4");
    const value5 = document.getElementById("value-5");
    const calculateButton = document.getElementById("calculate-button");
    const internalResult = document.getElementById("internal-result");
    const internalValue = document.getElementById("internal-value");
    const effectiveValue = document.getElementById("effective-value");

    calculateButton.addEventListener("click", () => {
        // 入力欄をまとめる
        const inputs = [value1, value2, value3, value4, value5];

        // 未入力チェック
        if (inputs.some(input => input.value.trim() === "")) {
            alert("1～5枠すべて入力してください。");
            return;
        }

        // 数値に変換
        const numbers = inputs.map(input => Number(input.value));

        // 不正な数値・負の数をチェック
        if (numbers.some(value => !Number.isFinite(value) || value < 0)) {
            alert("0以上の正しい数値を入力してください。");
            return;
        }

        // 内部値
        const internal = numbers.reduce((sum, value) => sum + value, 0);

        // 実効値
        const effective = numbers[0] + numbers.slice(1).reduce((sum, value) => sum + value, 0) * 0.2;

        // 結果表示
        internalValue.textContent = internal.toLocaleString();
        effectiveValue.textContent = effective.toLocaleString();

        // 結果を表示
        internalResult.classList.add("show");
        internalResult.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

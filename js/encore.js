document.addEventListener("DOMContentLoaded", () => {

    const runnerValue =
        document.getElementById("runner-value");

    const encoreValue =
        document.getElementById("encore-value");

    const otherValue =
        document.getElementById("other-value");

    const calculateButton =
        document.getElementById("calculate-button");

    const resultArea =
        document.getElementById("result-area");

    const resultContent =
        document.getElementById("result-content");


    // =====================
    // 計算
    // =====================

    calculateButton.addEventListener("click", () => {

        const runner =
            Number(runnerValue.value);

        const encore =
            Number(encoreValue.value);

        const other =
            Number(otherValue.value);


        // 未入力チェック
        if (
            !runnerValue.value ||
            !encoreValue.value ||
            !otherValue.value
        ) {
            resultContent.innerHTML =
                "<p>すべて入力してください。</p>";

            resultArea.classList.add("show");

            return;
        }


        // =====================
        // アンコール実効値を計算
        // =====================

        const actualEncore =
            encore + (encore - runner) * 2;


        // =====================
        // 判断
        // =====================

        let result;
        let explanation;


        if (other >= actualEncore) {

            result = "アンコールを取らない編成がおすすめ";

            explanation =
                `アンコール実効値は ${actualEncore} です。<br>
                比較する編成の実効値は ${other} なので、<br>
                比較する編成の方が ${other - actualEncore} 高いです。`;

        } else {

            result = "アンコールを取る編成がおすすめ";

            explanation =
                `アンコール実効値は ${actualEncore} です。<br>
                比較する編成の実効値は ${other} なので、<br>
                アンコールを取る編成の方が ${actualEncore - other} 高いです。`;

        }


        // =====================
        // 結果表示
        // =====================

        resultContent.innerHTML = `

            <div class="encore-result">

                <div class="encore-result-main">
                    ${result}
                </div>

                <div class="encore-result-value">
                    実際に出るアンコール値：
                    <strong>${actualEncore}</strong>
                </div>

                <p>
                    ${explanation}
                </p>

            </div>

        `;


        resultArea.classList.add("show");


        // 結果までスクロール
        resultArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

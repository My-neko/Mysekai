document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // 要素取得
    // =====================

    const roundName = document.getElementById("round-name");
    const roundCount = document.getElementById("round-count");

    const memberCount = document.getElementById("member-count");

    const roomNumber = document.getElementById("room-number");

    const hostValue = document.getElementById("host-value");
    const memberValue = document.getElementById("member-value");

    const templateText = document.getElementById("template-text");

    const createButton = document.getElementById("create-button");

    const resultArea = document.getElementById("result-area");
    const resultText = document.getElementById("result-text");

    const copyButton = document.getElementById("copy-button");
    const xButton = document.getElementById("x-button");


    // =====================
    // 募集文を作成
    // =====================

    createButton.addEventListener("click", () => {
        const name = roundName.value;

        const count = roundCount.value;

        const members = memberCount.value;

        const room =
            roomNumber.value || "未入力";

        const host =
            hostValue.value || "未入力";

        const member =
            memberValue.value || "未入力";

        const text = templateText.value;


        // 周回回数が入力されている場合だけ表示
        let roundTitle = name;

        if (count) {
            roundTitle += ` ${count}`;
        }


        // =====================
        // 募集文
        // =====================

        const result =
`${roundTitle}
@  ${members}人
🔑 ${room}
主：${host}
募：${member}

${text}`;


        // 結果を表示
        resultText.value = result;

        resultArea.classList.add("show");


        // 結果までスクロール
        resultArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    // =====================
    // コピー
    // =====================

    copyButton.addEventListener("click", async () => {

        if (!resultText.value) {
            return;
        }


        try {

            await navigator.clipboard.writeText(
                resultText.value
            );

            copyButton.textContent =
                "✅ コピーしました！";


            setTimeout(() => {

                copyButton.textContent =
                    "📋 コピー";

            }, 1500);


        } catch (error) {

            resultText.select();

            document.execCommand("copy");

            copyButton.textContent =
                "✅ コピーしました！";


            setTimeout(() => {

                copyButton.textContent =
                    "📋 コピー";

            }, 1500);

        }

    });


    // =====================
    // Xへ送る
    // =====================

    xButton.addEventListener("click", () => {

        if (!resultText.value) {
            return;
        }


        const text = encodeURIComponent(
            resultText.value
        );


        const url =
            `https://twitter.com/intent/tweet?text=${text}`;


        window.open(
            url,
            "_blank"
        );

    });

});

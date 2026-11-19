
// Landing page Enter Button
const enterBtn = document.getElementById("enter-btn");

if (enterBtn) {
    enterBtn.addEventListener("click", showCategories);
}

// Showing the category 
function showCategories() {
    
    app.innerHTML = `

        <div class="category-page">

            <h2 class="text-white text-center py-2 mt-3 mb-2">
                Choose Your Category
            </h2>

            <div class="category-container justify-content-center py-4">

                ${quizData.map((category) => `

                    <div class="category-card">

                        <div class="category-image">
                            <img src="${category.image}" alt="${category.logo}">
                        </div>

                        <div class="category-content">

                            <div class="category-title-row mt-2">

                                <h3 class="fw-bolder">
                                    ${category.title}
                                </h3>

                                ${category.active
            ? `<button class="category-next p-2 bg-primary text-white"
                                        data-category="${category.id}">
                                        <i class="ri-arrow-right-line fs-5"></i>
                                    </button>`
            : `<button class="category-next p-2 bg-dark text-white" disabled>
                                        <i class="ri-arrow-right-line fs-5"></i>
                                    </button>`
        }

                            </div>

                            <p>${category.about}</p>

                        </div>
                    </div>

                `).join("")}

            </div>
        </div>

        <button id="backHomeBtn">
            <a href="index.html" class="back-home-btn text-decoration-none">
                <i class="ri-arrow-left-line"></i> Home
            </a>
        </button>

    `;

    let selectedCategory = "";

    // Category Next Button
    document.querySelectorAll(".category-next").forEach(button => {

        button.addEventListener("click", function () {

            selectedCategory = Number(this.dataset.category);
            showQuizTerm();

        });

    });


    // Showing Quiz Details and Terms & Conditions
    function showQuizTerm() {

        const quiz = quizData.find(category => category.id === selectedCategory);

        if (!quiz) {
            console.log("Category not found!");
            return;
        }

        const totalQuestions = quiz.questions.length;

        app.innerHTML = `
    
            <div class="quiz-info-page text-white">
    
                <div class="quiz-info-card">
    
                    <div class="quiz-info-header">
    
                        <div class="quiz-icon">
                            ${quiz.icon}
                        </div>
    
                        <div>
                            <h2>${quiz.title}</h2>
                            <p>${quiz.about}</p>
                        </div>
    
                    </div>
    
                    <!-- Quiz Details -->
    
                    <div class="quiz-details">
    
                        <div class="detail-card">
                            <i class="ri-question-line"></i>
    
                            <div>
                                <span>Total Questions</span>
                                <strong>${totalQuestions}</strong>
                            </div>
                        </div>
    
                        <div class="detail-card">
                            <i class="ri-time-line"></i>
    
                            <div>
                                <span>Time</span>
                                <strong>${quiz.time}</strong>
                            </div>
                        </div>
    
                    </div>
    
                    <!-- Terms & Conditions -->
    
                    <div class="terms-box">
    
                        <h3>Terms & Conditions</h3>
    
                        <ul>
                            <li>Each question has only one correct answer.</li>
                            <li>You must complete the quiz within the given time.</li>
                            <li>Once you move to the next question, you may not be able to change your previous answer.</li>
                            <li>Your score will be calculated based on the number of correct answers.</li>
                            <li>Please do not refresh the page while taking the quiz.</li>
                        </ul>
    
                    </div>
    
                    <!-- Buttons -->
    
                    <div class="quiz-info-buttons">
    
                        <button id="backCategoryBtn" class="back-btn">
                            <i class="ri-arrow-left-line"></i>
                            Back
                        </button>
    
                        <button id="startQuizBtn" class="start-quiz-btn">
                            Start Quiz
                            <i class="ri-arrow-right-line"></i>
                        </button>
    
                    </div>
    
                </div>
    
            </div>
    
        `;

        // Back Button Event
        document.getElementById("backCategoryBtn").addEventListener("click", showCategories);

        // Start Quiz Button Event
        document.getElementById("startQuizBtn").addEventListener("click", function () {

            console.log("Start Quiz button clicked");
            console.log("Selected Category:", selectedCategory);
            window.location.href = `quiz.html?id=${selectedCategory}`;

        });
    }

}
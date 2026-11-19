const quizData = [

    {
        id: 1,
        title: "General Knowledge",
        icon: "🧠",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        logo:"Logo",
        about: "Explore Facts,<br>History, Culture and More!",
        time: "120s",
        active: true,

        questions: [
            // 10 questions 

            {
                question: "What is the capital of India?",
                options: ["Mumbai", "New Delhi", "Jaipur", "Kolkata"],
                answer: "New Delhi"
            },
            {
                question: "Which is the largest planet in our Solar System?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Jupiter"
            },
            {
                question: "How many continents are there in the world?",
                options: ["5", "6", "7", "8"],
                answer: "7"
            },
            {
                question: "Which is the largest ocean in the world?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "What is the national animal of India?",
                options: ["Lion", "Tiger", "Elephant", "Leopard"],
                answer: "Tiger"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "South Korea"],
                answer: "Japan"
            },
            {
                question: "How many days are there in a leap year?",
                options: ["364", "365", "366", "367"],
                answer: "366"
            },
            {
                question: "Which is the fastest land animal?",
                options: ["Lion", "Horse", "Cheetah", "Tiger"],
                answer: "Cheetah"
            },
            {
                question: "Who wrote the national anthem of India?",
                options: [
                    "Mahatma Gandhi",
                    "Rabindranath Tagore",
                    "Jawaharlal Nehru",
                    "Bankim Chandra Chatterjee"
                ],
                answer: "Rabindranath Tagore"
            },
            {
                question: "Which is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2"
            }
        ]

    },

    {
        id: 2,
        title: "Food & Cooking",
        icon: "🍔",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        about: "Explore Food,<br>Cooking and Delicious Facts!",
        time: "120s",
        active: true,

        questions: [
            {
                question: "Which fruit is known as the King of Fruits?",
                options: ["Apple", "Mango", "Banana", "Orange"],
                answer: "Mango"
            },
            {
                question: "Which country is famous for pizza?",
                options: ["India", "Italy", "France", "Spain"],
                answer: "Italy"
            },
            {
                question: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Avocado", "Potato", "Carrot"],
                answer: "Avocado"
            },
            {
                question: "Which spice gives curry a yellow color?",
                options: ["Turmeric", "Cinnamon", "Clove", "Pepper"],
                answer: "Turmeric"
            },
            {
                question: "What is tofu mainly made from?",
                options: ["Wheat", "Rice", "Soybeans", "Corn"],
                answer: "Soybeans"
            },
            {
                question: "Which grain is commonly used to make sushi?",
                options: ["Wheat", "Rice", "Barley", "Oats"],
                answer: "Rice"
            },
            {
                question: "Which vegetable is commonly used to make French fries?",
                options: ["Carrot", "Potato", "Onion", "Cabbage"],
                answer: "Potato"
            },
            {
                question: "Which ingredient helps bread rise?",
                options: ["Salt", "Yeast", "Oil", "Butter"],
                answer: "Yeast"
            },
            {
                question: "Which drink is made from roasted coffee beans?",
                options: ["Tea", "Coffee", "Juice", "Lemonade"],
                answer: "Coffee"
            },
            {
                question: "Which dairy product is commonly used to make pizza?",
                options: ["Cheese", "Yogurt", "Butter", "Cream"],
                answer: "Cheese"
            }
        ]
    },

    {
        id: 3,
        title: "Science",
        icon: "🔬",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        about: "Discover Science,<br>Nature and Amazing Facts!",
        time: "120s",
        active: true,

        questions: [
            {
                question: "What is the chemical formula of water?",
                options: ["CO2", "H2O", "O2", "NaCl"],
                answer: "H2O"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                answer: "Mars"
            },
            {
                question: "Which gas do humans need to breathe?",
                options: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Helium"],
                answer: "Oxygen"
            },
            {
                question: "What is the center of an atom called?",
                options: ["Electron", "Nucleus", "Proton", "Shell"],
                answer: "Nucleus"
            },
            {
                question: "Which organ pumps blood through the human body?",
                options: ["Brain", "Lungs", "Heart", "Kidney"],
                answer: "Heart"
            },
            {
                question: "What force pulls objects toward Earth?",
                options: ["Friction", "Gravity", "Magnetism", "Electricity"],
                answer: "Gravity"
            },
            {
                question: "Which part of a plant performs photosynthesis?",
                options: ["Root", "Stem", "Leaf", "Flower"],
                answer: "Leaf"
            },
            {
                question: "What is the boiling point of water at sea level?",
                options: ["50°C", "75°C", "100°C", "150°C"],
                answer: "100°C"
            },
            {
                question: "Which is the largest organ in the human body?",
                options: ["Heart", "Liver", "Skin", "Brain"],
                answer: "Skin"
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                answer: "Mercury"
            }
        ]
    },

    {
        id: 4,
        title: "History",
        icon: "📜",
        image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882",
        about: "Explore the Past,<br>Events, People and Civilizations!",
        time: "120s",
        active: false,

        questions: [
            {
                question: "In which year did India gain independence?",
                options: ["1945", "1946", "1947", "1950"],
                answer: "1947"
            },
            {
                question: "Who was the first Prime Minister of India?",
                options: [
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru",
                    "Sardar Patel",
                    "Rajendra Prasad"
                ],
                answer: "Jawaharlal Nehru"
            },
            {
                question: "Who built the Taj Mahal?",
                options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
                answer: "Shah Jahan"
            },
            {
                question: "Who was the first President of India?",
                options: [
                    "Dr. Rajendra Prasad",
                    "Jawaharlal Nehru",
                    "Sardar Patel",
                    "Dr. B. R. Ambedkar"
                ],
                answer: "Dr. Rajendra Prasad"
            },
            {
                question: "Who founded the Maurya Empire?",
                options: [
                    "Ashoka",
                    "Chandragupta Maurya",
                    "Harsha",
                    "Akbar"
                ],
                answer: "Chandragupta Maurya"
            },
            {
                question: "Who was known as the Iron Man of India?",
                options: [
                    "Sardar Vallabhbhai Patel",
                    "Subhas Chandra Bose",
                    "Bhagat Singh",
                    "Bal Gangadhar Tilak"
                ],
                answer: "Sardar Vallabhbhai Patel"
            },
            {
                question: "Who founded the Mughal Empire in India?",
                options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
                answer: "Babur"
            },
            {
                question: "The Quit India Movement was launched in which year?",
                options: ["1930", "1935", "1942", "1947"],
                answer: "1942"
            },
            {
                question: "Who discovered the sea route to India from Europe?",
                options: [
                    "Christopher Columbus",
                    "Vasco da Gama",
                    "Ferdinand Magellan",
                    "Marco Polo"
                ],
                answer: "Vasco da Gama"
            },
            {
                question: "Who was the first emperor of the Roman Empire?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                answer: "Augustus"
            }
        ]
    },

    {
        id: 5,
        title: "Geography",
        icon: "🌍",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        about: "Explore Earth,<br>Countries, Places and Nature!",
        time: "120s",
        active: false,

        questions: [
            {
                question: "Which is the largest continent?",
                options: ["Africa", "Asia", "Europe", "Australia"],
                answer: "Asia"
            },
            {
                question: "Which is the highest mountain in the world?",
                options: [
                    "K2",
                    "Mount Everest",
                    "Kangchenjunga",
                    "Mount Kilimanjaro"
                ],
                answer: "Mount Everest"
            },
            {
                question: "Which is the largest country by area?",
                options: ["Canada", "China", "Russia", "USA"],
                answer: "Russia"
            },
            {
                question: "Which is the smallest continent?",
                options: ["Europe", "Australia", "South America", "Africa"],
                answer: "Australia"
            },
            {
                question: "Which ocean lies between Africa and Australia?",
                options: [
                    "Atlantic Ocean",
                    "Pacific Ocean",
                    "Indian Ocean",
                    "Arctic Ocean"
                ],
                answer: "Indian Ocean"
            },
            {
                question: "Which line divides Earth into Northern and Southern Hemispheres?",
                options: [
                    "Prime Meridian",
                    "Equator",
                    "Tropic of Cancer",
                    "Arctic Circle"
                ],
                answer: "Equator"
            },
            {
                question: "Which country is famous for the Eiffel Tower?",
                options: ["Italy", "France", "Germany", "Spain"],
                answer: "France"
            },
            {
                question: "Which is the largest island in the world?",
                options: ["Greenland", "Madagascar", "Borneo", "Iceland"],
                answer: "Greenland"
            },
            {
                question: "Which is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "Which desert covers much of North Africa?",
                options: [
                    "Gobi Desert",
                    "Sahara Desert",
                    "Thar Desert",
                    "Kalahari Desert"
                ],
                answer: "Sahara Desert"
            }
        ]
    }

];
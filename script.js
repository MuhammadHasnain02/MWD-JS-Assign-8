let questions = [

  {
      quesNo: 1,
      question: "What is the capital of Pakistan?",
      answer: "Islamabad",
      options: ["Karachi", "Islamabad", "Lahore"]
  },
  {
      quesNo: 2,
      question: "Who was the founder of Pakistan?",
      answer: "Quaid-e-Azam",
      options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam"]
  },
  {
      quesNo: 3,
      question: "When did Pakistan gain independence?",
      answer: "14th August 1947",
      options: ["14th August 1947", "15th August 1947", "23rd March 1940"]
  },
  {
      quesNo: 4,
      question: "What is the national language of Pakistan?",
      answer: "Urdu",
      options: ["English", "Punjabi", "Urdu"]
  },
  {
      quesNo: 5,
      question: "Which is the national animal of Pakistan?",
      answer: "Markhor",
      options: ["Markhor", "Tiger", "Elephant"]
  },
  {
      quesNo: 6,
      question: "What is the national flower of Pakistan?",
      answer: "Jasmine",
      options: ["Rose", "Jasmine", "Sunflower"]
  },
  {
      quesNo: 7,
      question: "Who wrote the national anthem of Pakistan?",
      answer: "Hafeez Jalandhari",
      options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz"]
  },
  {
      quesNo: 8,
      question: "Which is the highest military award in Pakistan?",
      answer: "Nishan-e-Haider",
      options: ["Sitara-e-Jurat", "Tamgha-e-Imtiaz", "Nishan-e-Haider"]
  },
  {
      quesNo: 9,
      question: "Which is the largest province of Pakistan by area?",
      answer: "Balochistan",
      options: ["Punjab", "Balochistan", "Sindh"]
  },
  {
      quesNo: 10,
      question: "Which river is known as the lifeline of Pakistan?",
      answer: "Indus River",
      options: ["Chenab River", "Indus River", "Ravi River"]
  },
  {
  quesNo: 11,
  question: "What is the currency of Pakistan?",
  answer: "Rupee",
  options: ["Rupee", "Dinar", "Riyal"]
  },
  {
    quesNo: 12,
    question: "Which city is known as the City of Lights?",
    answer: "Karachi",
    options: ["Lahore", "Karachi", "Islamabad"]
  },
  {
    quesNo: 13,
    question: "Which mountain is the highest in Pakistan?",
    answer: "K2",
    options: ["K2", "Nanga Parbat", "Broad Peak"]
  },
  {
    quesNo: 14,
    question: "Which famous poet is considered the national poet of Pakistan?",
    answer: "Allama Iqbal",
    options: ["Mirza Ghalib", "Allama Iqbal", "Parveen Shakir"]
  },
  {
    quesNo: 15,
    question: "Which is the national sport of Pakistan?",
    answer: "Hockey",
    options: ["Cricket", "Football", "Hockey"]
  },
  {
    quesNo: 16,
    question: "In which year did Pakistan become a nuclear power?",
    answer: "1998",
    options: ["1974", "1998", "2001"]
  },
  {
    quesNo: 17,
    question: "Which Pakistani city is famous for its historical Mughal architecture?",
    answer: "Lahore",
    options: ["Multan", "Lahore", "Hyderabad"]
  },
  {
    quesNo: 18,
    question: "What is the name of the border between Pakistan and India?",
    answer: "Wagah Border",
    options: ["Durand Line", "Wagah Border", "Radcliffe Line"]
  },
  {
    quesNo: 19,
    question: "Who was the first female Prime Minister of Pakistan?",
    answer: "Benazir Bhutto",
    options: ["Fatima Jinnah", "Benazir Bhutto", "Hina Rabbani Khar"]
  },
  {
    quesNo: 20,
    question: "Which is the largest dam in Pakistan?",
    answer: "Tarbela Dam",
    options: ["Mangla Dam", "Tarbela Dam", "Warsak Dam"]
  }

]

let userName = prompt("Enter Your Name")
alert(userName + " Your quiz is about to begin. Please click 'OK' to start the quiz. Good luck!")

for (let i = 0; i < questions.length; i++) {
    
    let prntQues =
    `
    <div id="quesBox">
      <p id="p1"><strong>Q${questions[i].quesNo}. ${questions[i].question}</strong></p>
      <div id="optDiv">
        <p id="p2" class="option" onclick="check(this, '${questions[i].answer}')">1. ${questions[i].options[0]}</p>
        <p id="p3" class="option" onclick="check(this, '${questions[i].answer}')">2. ${questions[i].options[1]}</p>
        <p id="p4" class="option" onclick="check(this, '${questions[i].answer}')">3. ${questions[i].options[2]}</p>
      </div>    
    </div>
    `
    document.getElementById("mainDiv").innerHTML += prntQues    
}

let mark = 0

function check(element , correctAns) {

    if (element.innerText.includes(correctAns)) {
      element.classList.add("correct")
      mark++
    }
    else{
      element.classList.add("wrong")
    }

    let allOptions = element.parentElement.getElementsByClassName("option")

    for (let opt of allOptions) {
        opt.onclick = null;
    }

}

function submit() {
  
  document.body.innerHTML = ""

  let fullMarks = questions.length
  let obtMarks  = mark
  let status    = ""

  if (fullMarks / 2 <= obtMarks) {
    status = "Passed"
  }
  else{
    status = "Fail"
  }


  let htmlRes =
  `
  <h1 class ="head1">${userName}! Your Quiz Result is :</h1>
  <table id ="tableDiv">
    <tr id ="trDiv1">
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
        <th>Status</th>
    </tr>
    <tr id ="trDiv2">
        <td>${fullMarks}</td>
        <td>${obtMarks}</td>
        <td>${obtMarks / fullMarks * 100}%</td>
        <td>${status}</td>
    </tr>
  </table>
  <p id ="msgTxt"></p>
  `
  document.body.innerHTML = htmlRes


  if (status == "Passed") {
    document.getElementById("msgTxt").innerText = '"Congratulations! You have successfully passed the exam.\n Keep up the good work and continue striving for excellence."'
  }
  else {
    document.getElementById("msgTxt").innerText = '"Unfortunately, you did not pass this time. Dont be discouraged—review\n your mistakes, work harder, and try again. Success is within your reach!"'
  }
}
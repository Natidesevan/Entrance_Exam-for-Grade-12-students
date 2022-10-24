// open modal on button click
var modal_open_btn = document.getElementById('myBtn');

var modal_div = document.getElementById('myModal');

var modal_close_btn = document.getElementsByClassName('close')[0];

// when click on open button, open the modal
modal_open_btn.onclick = function() {
	modal_div.style.display = 'block';
}

// when click on close button, close the modal
modal_close_btn.onclick = function() {
	modal_div.style.display = 'none';
}

// when click outside the modal area, close the modal
window.onclick = function(event) {
	if(event.target == modal_div) {
		modal_div.style.display = 'none';
	}
}

// update age slider value
var slider = document.getElementById('age');
var output = document.getElementById('ageRange');
output.innerHTML = slider.value; // display the initial value

// change to current value
slider.oninput = function() {
	output.innerHTML = this.value;
}


// this function receives student information
function sendStudentInfo(e) {
	e.preventDefault();
	
	// receive input
	var name, gender, age, nationality;

	name = document.getElementById('name').value;
	gender = document.getElementById('gender').value;
	age = document.getElementById('age').value;
	nationality = document.getElementById('nationality').value;




	// generate question
	var questions;

	questions = '<h1>Entrance Exam</h1>';

	questions += '<pre id="student_info">Student: <strong>' + name + '</strong>   ';
	questions += 'Gender: <strong>' + gender + '</strong>   ';
	questions += 'Age: <strong>' + age + '</strong>   ';
	questions += 'Nationality: <strong>' + nationality + '</strong>   </pre>';
	

	questions += generateDate(); // get current date
	questions += generateQuestion(); // get questions

	// submit answer button
	questions += '<button class="btn" onclick="submitAnswer(event)">Enter the Answer</button>';
	questions += '';




	document.getElementById('question_header').innerHTML = questions;





	// close modal
	modal_div.style.display = 'none';

	// hide original button
	modal_open_btn.style.display = 'none';
}

// this function generates current date
function generateDate(){
	var thisDate = ''; // Wednesday september 18, 2022
	var today = new Date();
	var date = today.getDate(); // 1 ... 31 (31 days of month)
	var day = today.getDay(); // 0 .. 6 (7 days of week)
	var month = today.getMonth(); // 0 ... 11 (12 months of year)
	var year = today.getFullYear(); // 2022

	// get week day by name, 0 .. 6
	switch(day) {
		case 0:
			thisDate += 'Sunday';
			break;
		case 1:
			thisDate += 'Monday';
			break;
		case 2:
			thisDate += 'Tuesday';
			break;
		case 3:
			thisDate += 'Wednesday';
			break;
		case 4:
			thisDate += 'Thursday';
			break;
		case 5:
			thisDate += 'Friday';
			break;
		case 6:
			thisDate += 'Saturday';
			break;
	}

	var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var thisMonth = monthsArr[month]; // 6

	// Wednesday september 18, 2022
	thisDate += ' ' + thisMonth + ' ' + date + ', ' + year;

	return thisDate;
}

// this function outputs questions related to Entrance Exam
function generateQuestion() {
	var EntranceExam = '', str;

	var questionsArray = [
		'Solve the given equations. 1. 3 14 8 1 x +=−x:',
		'Which of the following is not part of the metabolic sequence.',
		'A 5.0 kg mass is placed in an elevator that is accelerating upwards at 4.0 m/s2. The apparent weight of this mass is :',
		'The measurement 0.000 0043 m, expressed correctly using scientific notation, is.',
		'Capital formation is difficult in poor countries, becauses:',
		'Which one of the following Union Territories has the highest density of population:',
		'Could conquer in me the restless itch to rove And rummage through the world exploring it,” In the lines above, rove means which of the following:',
		'Making our oars wings to the witless flight,” In the line above, witless means which of the following:',
		' A 36 foot long tube is cut into two pieces with ratio 4:5.  Find the length of the shorter piece.',
		
	];

	var choicesArray = [
		'6, 5, 3, 9',
		'Photosynthesis, Respiration, Hydoplasm, Digestion',
		'20 N, 29 N, 49 N, 69 N',
		'4.3 × 10-7 m, 4.3 × 10-6 m, 4.3 × 106 m, 0.43 × 10-5 m',
		'most poor countries are undemocratic, they lack advanced digital technologies, their population cannot afford to save very much, they cannot increase their money supply without creating inflation',
		'NCT Delhi , Andaman and Nicobar Island, Chandigarh, Puducherry',
		'yearn, attempt, wander , emigrate',
		' gallant , foolish , daring, attempted ',
		'9 feet,  16 feet,  12 feet,  20 feet',
	];

	var imagesArray = [
		'img1/busines1.jpg',
		'img1/img2.jpg',
		'img1/data sci3.webp',
		'img1/img4.jpg',
		'img1/hist5.jpg',
		'img1/img6.jpg',
		'img1/img7.jpg',
		'img1/oliver8.png',
		'img1/socail9.jpg',
		
	];

	for(var i = 0; i < questionsArray.length; i++){
		EntranceExam += '<br><br><hr> <p>' + (i + 1) + '. ' + questionsArray[i] + '</p>';
		// add the image
		EntranceExam += '<div class="question_left">';
		EntranceExam += '<img src="' + imagesArray[i] + '" class="exam_img">';
		EntranceExam += '</div>';

		// split choices string to choices array
		str = choicesArray[i].split(', ');

		// add the choice
		EntranceExam += '<div class="question_right">';
		EntranceExam += '<form>';

		// give different ID to each choice; 
		// id = choice0_0, choice0_1, choice0_2, choice0_3 .... first question
		// id = choice1_0, choice1_1, choice1_2, choice1_3 .... second question
		// id = choice2_0, choice2_1, choice2_2, choice2_3 .... third question

		// loop through choices
		for(var j = 0; j < str.length; j++){

			EntranceExam += '<label class="choices">';
			EntranceExam += str[j];
			EntranceExam += '<input id="choice' + i + '_' + j + '" type="radio" name="radio" value="' + str[j] + '">';
			EntranceExam += '<span class="checkmark"></span>';
			EntranceExam += '</label>';
			
		}
		EntranceExam += '</form>';
		EntranceExam += '</div> <br><br>';


	}


	return EntranceExam;
}

// this function submits answers on button click
function submitAnswer(event){
	event.preventDefault();

	// capture student answers
	// only 9 answers submitted!!
	var question_0_answer, question_1_answer, question_2_answer, question_3_answer,
		question_4_answer, question_5_answer, question_6_answer, question_7_answer,
		question_8_answer ;

	var studentAnswers, correctAnswers;

	// collect choices first, 36 choices for 9 questions
	var question_0_choices_array = [], question_1_choices_array = [], question_2_choices_array = [],
		question_3_choices_array = [], question_4_choices_array = [], question_5_choices_array = [],
		question_6_choices_array = [], question_7_choices_array = [], question_8_choices_array = []; // 4 choices

	for(var i = 0; i < 4; i++){
		question_0_choices_array[i] = document.getElementById('choice0_' + i); // 0_0, 0_1, 0_2, 0_3
		question_1_choices_array[i] = document.getElementById('choice1_' + i); // 1_0, 1_1, 1_2, 1_3
		question_2_choices_array[i] = document.getElementById('choice2_' + i);
		question_3_choices_array[i] = document.getElementById('choice3_' + i);
		question_4_choices_array[i] = document.getElementById('choice4_' + i);
		question_5_choices_array[i] = document.getElementById('choice5_' + i);
		question_6_choices_array[i] = document.getElementById('choice6_' + i);
		question_7_choices_array[i] = document.getElementById('choice7_' + i);
		question_8_choices_array[i] = document.getElementById('choice8_' + i);
		

		// if the choice is selected, the submit it as student answer
		if(question_0_choices_array[i].checked){
			question_0_answer = question_0_choices_array[i].value;
		}

		if(question_1_choices_array[i].checked){
			question_1_answer = question_1_choices_array[i].value;
		}

		if(question_2_choices_array[i].checked){
			question_2_answer = question_2_choices_array[i].value;
		}
		if(question_3_choices_array[i].checked){
			question_3_answer = question_3_choices_array[i].value;
		}
		if(question_4_choices_array[i].checked){
			question_4_answer = question_4_choices_array[i].value;
		}
		if(question_5_choices_array[i].checked){
			question_5_answer = question_5_choices_array[i].value;
		}
		if(question_6_choices_array[i].checked){
			question_6_answer = question_6_choices_array[i].value;
		}
		if(question_7_choices_array[i].checked){
			question_7_answer = question_7_choices_array[i].value;
		}
		if(question_8_choices_array[i].checked){
			question_8_answer = question_8_choices_array[i].value;
		}
		
	}

	// gather student 10 answers
	studentAnswersArr = [question_0_answer, question_1_answer, question_2_answer, question_3_answer,
		question_4_answer, question_5_answer, question_6_answer, question_7_answer,
		question_8_answer];

	// b, c, a, b, d, b, b, d, c, c
	correctAnswersArr = ['3', 'Hydoplasm',
		'69 N', 
		'4.3 × 10-6 m', 'their population cannot afford to save very much', 
		'NCT Delhi', 
		'Stop', 'wander', 'foolish', 
		'16 feet'];


	// sent submitted choices for grading
	gradeAnswers(studentAnswersArr, correctAnswersArr);
}


// this function grades submitted answers
function gradeAnswers(responseArr, correctArr){
	var counter = 0, finalGrade, decision, message, certificate;
	
	// get student info from output
	var stu_info_arr = studentInfo(); // name, gender, age, nationality

	// get current date
	var today = generateDate();



	// compare to the correct answers and !!COUNT!! the correct ones
	for(var i = 0; i < responseArr.length; i++){
		if(responseArr[i] == correctArr[i]){
			counter++; // increases as answer is correct
		}
	}


	// final grade out of 100%
	// if answers 6 out of 9, 6/9 = 0.66; 0.66*100 = 66; score = 66%
	finalGrade = (counter/9) * 100;

	// decide the passing grade, only allowd to miss one question
	if(finalGrade >= 90){
		decision = 'Passed!';
		message = 'Congradulations! You are now ready for practical test.';
	} else {
		decision = 'Failed!';
		message = 'Exam must be retaken. You are only allowd to miss one question!';
	}

	// generate certificate
	certificate = '=================== Entrance Exam ===================';
	certificate += '<br>Student: ' + stu_info_arr[0];
	certificate += '<br>Exam taken on: ' + today;
	certificate += '<br>Score: ' + finalGrade + '%';
	certificate += '<br>Decision: ' + decision;
	certificate += '<br>' + message;
	certificate += '<br>Correct Answers: 1. c, 2. c, 3. d, 4. b, 5. c, 6. a, 7. c, 8. b, 9. b,';
	certificate += '<br>====================================================';


	// export certificate
	document.getElementById('question_header').innerHTML = certificate;

}

function studentInfo(){
	var stuInfoStr = document.getElementById('student_info').textContent;
	var stuInfoArr = stuInfoStr.split(' '); // 17 elements
	var studentInfo = [];
	var j = 0;

	for(var i = 0; i < stuInfoArr.length; i++){
		if(stuInfoArr[i].includes(':') || stuInfoArr[i] == ''){
			// do nothing
		} else {
			studentInfo[j] = stuInfoArr[i];
			j++; // increases as we find correct info
		}
	}


	return studentInfo;
}



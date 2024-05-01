

//3
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.login_button').addEventListener('click', function(){
        var username = document.querySelector('input[name="username"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var age = document.querySelector('input[name="age"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var passwordcheck = document.querySelector('input[name="passwordcheck"]').value;

        // 배열을 사용하여 에러 메세지들을 저장한다. 
        var errorMessages = [];

        //에러 메세지를 추가한다. 
        if (username === '') {
            document.getElementById('usernameError').textContent = '필수 입력 항목입니다!';
            errorMessages.push('필수 입력 항목입니다!');
        } else {
            document.getElementById('usernameError').textContent = '멋진 이름이네요!';
            document.getElementById('usernameError').classList.add('success-message'); // 성공 메세지 클래스 추가

        }

        if (email === '') {
            document.getElementById('emailError').textContent = '이메일을 입력하세요';
            errorMessages.push('이메일을 입력하세요.');
        } else if (!email.includes('@')) {
            document.getElementById('emailError').textContent = '올바른 이메일 형식이 아닙니다!';
            errorMessages.push('올바른 이메일 형식이 아닙니다!');
        } else {
            document.getElementById('emailError').textContent = '올바른 이메일 형식입니다!';
            document.getElementById('emailError').classList.add('success-message'); //성공 메세지 클래스 추가
        }

        // 나이 조건 
        if (age === '') {
            document.getElementById('ageError').textContent = '나이를 입력해주세요!';
            errorMessages.push('나이를 입력해주세요!');
        }  else if (isNaN(age)) {
            document.getElementById('ageError').textContent = '숫자를 입력하세요!';
            errorMessages.push('숫자를 입력하세요!');
        } else if (age < 0) {
            document.getElementById('ageError').textContent = '음수가 될 수 없습니다!';
            errorMessages.push('음수가 될 수 없습니다!');
        } else if (age % 1 !== 0) {
            document.getElementById('ageError').textContent = '소수가 될 수 없습니다!';
            errorMessages.push('소수가 될 수 없습니다!');
        } else if (age < 19) {
            document.getElementById('ageError').textContent = '우리 영화 사이트는 19살 이상만 가입이 가능합니다!';
            errorMessages.push('우리 영화 사이트는 19살 이상만 가입이 가능합니다!');
        } else {
            document.getElementById('ageError').textContent = '올바른 나이 형식입니다!';
            document.getElementById('ageError').classList.add('success-message'); // 성공 메세지 클래스 추가 
        }

        //비밀번호 조건 
        if (password === '') {
            document.getElementById('passwordError').textContent = '비밀번호를 입력하세요';
            errorMessages.push('비밀번호를 입력하세요!');
        } else if (password.length < 4) {
            document.getElementById('passwordError').textContent = '비밀번호는 최소 4자리 이상이어야 합니다!';
            errorMessages.push('비밀번호는 최소 4자리 이상이어야 합니다!');
        } else if (password.length > 12) {
            document.getElementById('passwordError').textContent = '비밀번호는 최대 12자리까지 가능합니다!';
            errorMessages.push('비밀번호는 최대 12자리까지 가능합니다!');
        } else if (!password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,12}$/)) {
            document.getElementById('passwordError').textContent = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!';
            errorMessages.push('영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!');
        } else {
            document.getElementById('passwordError').textContent = '올바른 비밀번호 입니다!';
            document.getElementById('passwordError').classList.add('success-message'); // 성공 메세지 클래스 추가
        }

        // 비밀번호 확인 
        if (passwordcheck === '') {
            document.getElementById('passwordcheckError').textContent = '비밀번호 확인을 입력하세요!';
            errorMessages.push('비밀번호 확인을 입력하세요!');
        } else if (passwordcheck !== password) {
            document.getElementById('passwordcheckError').textContent = '비밀번호가 일치하지 않습니다!';
            errorMessages.push('비밀번호가 일치하지 않습니다!');
        } else {
            document.getElementById('passwordcheckError').textContent = '비밀번호가 일치합니다!';
            document.getElementById('passwordcheckError').classList.add('success-message'); // 성공 메세지 클래스 추가 
        }

        // 입력하지 않았을 시 제출하기 폼 버튼 비활성화 
        if (errorMessages.length > 0) {
           
            document.querySelector('login_button').setAttribute('type', 'button');
        } else {
          
            document.querySelector('.login_button').setAttribute('type', 'submit');
        }
        // 모든 유효성 검사 통과 여부를 확인하고 모달을 표시합니다.
        if (errorMessages.length === 0) {
            showModal(); // 모달을 표시하는 함수 호출
        }
    });
    // 모달을 표시하는 함수
    function showModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }

    // 모달 닫기 버튼에 이벤트 리스너 추가
    var closeModalBtn = document.querySelector('.close');
    closeModalBtn.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    });
});

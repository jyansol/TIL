# JAVASCRIPT 03. CSS variables with JS


# View Source

    const inputs = document.querySelectorAll('.controls input');  
    //querySelectorAll : Dom 요소?

    function handleUpdate() {
        const suffix = this.dataset.sizing || ''; // sizing or ''
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        //요소의 이름, 값 + suffix
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    //forEach 배열의 각각 요소에 호출
    //inputs(.controls와 input)에 'change' 되면 handleUpdate를 forEach함.
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    //inputs(.controls와 input)에 'change' 되면 handleUpdate를 forEach함.
    // change, mousemove ?


# memo
 * JS ) change, mousemove 의미
 * CSS ) 변수를 사용하는 이유 / 사용하지 않는다면 어떻게 쓰이는지
 * 알고나면 쉽지만, 막상 혼자 적으려고 하면 어렵다. 


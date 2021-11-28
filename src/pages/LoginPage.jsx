import React from 'react'

function LoginPage() {
  //https://fakestoreapi.com/docs#auth
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
          username: event.currentTarget.login.value,
          password: event.currentTarget.password.value
        })
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
  //когда сервер вернет token - надо записать его в state, а не просто в консоль 
  // Пример: {token: "eyJhbGciOiJIUzI1NiIsInR"}
  //Так я и не дождался ответа с сервера - возвращает код статуса 524 - истекло время
  //Тестировал в POSTMAN - тоже без результата.
}


  return (
      <div>
      <form class="loginForm" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Учетные данные</legend>
          <div>
            <input
              type="text"
              name="login"
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
            />
          </div>
          <button type="submit">Войти</button>
          <p>Пытался залогиниться и получить токен так, как описано здесь: https://fakestoreapi.com/docs#auth</p>
          <p>Но не получается - код статуса 524 - истекло время</p>
        </fieldset>
      </form>
    </div>
  )
}

function login(username, password) {

  fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    })
  })
    .then(res=>res.json())
    .then(json=>console.log(json))
  

}

export default LoginPage

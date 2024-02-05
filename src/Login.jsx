import React, { useState } from "react";
import styles from "./Style.Login.module.css";
import styled from "styled-components";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    day: "",
    month: "",
    year: "",
    sexual: "",
    email: "",
    password: "",
    repassword: "",
    phone: "",
    check: false,
    check2: false,
    first: true,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    six: true,
    back1: "",
    back2: "",
    back3: "",
    back4: "",
  });

  let informatin = new Array();

  const changeHandler = (e) => {
    if (e.target.name == "name") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "lastname") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "day") {
      if (e.target.value > 31) {
        e.target.style.borderColor = "red";
        e.target.placeholder = "day is invalid";
      } else {
        e.target.style.borderColor = "";
        e.target.placeholder = "day";
        setForm((form) => ({
          ...form,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name == "month") {
      console.log(e.target.value);
      e.target.firstChild.innerText = e.target.value;
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "year") {
      if (e.target.value > 2015) {
        e.target.style.borderColor = "red";
        e.target.placeholder = "privicy warning";
      } else {
        e.target.style.borderColor = "";
        e.target.placeholder = "year";
        setForm((form) => ({
          ...form,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name == "sexual") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "email") {
      let email1 = e.target.value;

      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "password") {
      let pass = e.target.value;
      setTimeout(() => {
        if (pass.length < 8 && 0 < pass.length) {
          e.target.style.borderColor = "red";
          document.querySelector("#root2").innerText = "your password is short";
        } else if (pass == "") {
          e.target.style.borderColor = "";
          document.querySelector("#root2").innerText = "";
        } else if (/\s/.test(pass)) {
          e.target.style.borderColor = "red";
          document.querySelector("#root2").innerText =
            "your password has space";
        } else {
          setForm((form) => ({
            ...form,
            [e.target.name]: e.target.value,
          }));
          e.target.style.borderColor = "";
          document.querySelector("#root2").innerText = "";
        }
      }, 1000);
    } else if (e.target.name == "repassword") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "phone") {
      if (/[a-zA-Z]/g.test(e.target.value)) {
        e.target.value = "";
      }
       else {
        setForm((form) => ({
          ...form,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name == "check") {
      setForm((form) => ({
        ...form,
        check: !form.check,
      }));
      if (!form.check == true) {
        document.querySelector("#password").type = "text";
        document.querySelector("#repassword").type = "text";
      } else {
        document.querySelector("#password").type = "password";
        document.querySelector("#repassword").type = "password";
      }
    } else if (e.target.name == "check2") {
      setForm((form) => ({
        ...form,
        check2: !form.check2,
      }));
    } else if (e.target.name == "first") {
      e.preventDefault();
      informatin.push(form.name);
      informatin.push(form.lastname);
      console.log(informatin[0]);
      let namechk = informatin[0];
      let lastnamechk = informatin[1];
      if (!isNaN(namechk)) {
        alert("name in not correct");
      } else if (namechk == "") {
        alert("name in not correct");
      } else if (informatin[0] == "" || informatin[1] == "") {
        alert("please fill items");
      } else if (!isNaN(lastnamechk)) {
        alert("lastname in not correct");
      } else if (lastnamechk == "") {
        alert("lastname in not correct");
      } else if (informatin[0] == "" || informatin[1] == "") {
        alert("please fill items");
      } else {
        setForm((form) => ({
          ...form,
          first: !form.first,
        }));
        console.log(informatin);
        setForm((form) => ({
          ...form,
          second: !form.second,
        }));
      }
    } else if (e.target.name == "second") {
      e.preventDefault();
      if (!form.month || !form.day || !form.year || !form.sexual) {
        alert("please fill");
      } else {
        setForm((form) => ({
          ...form,
          third: !form.third,
        }));
        setForm((form) => ({
          ...form,
          second: !form.second,
        }));
        informatin.push(form.month);
        informatin.push(form.day);
        informatin.push(form.year);
        informatin.push(form.sexual);
      }
    } else if (e.target.name == "third") {
      e.preventDefault();
      if (!form.email) {
        alert("please fill gmail input corrctly");
      } else if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
      ) {
        setTimeout(() => {
          setForm((form) => ({
            ...form,
            third: !form.third,
          }));
          setForm((form) => ({
            ...form,
            forth: !form.forth,
          }));
        }, 1000);
      } else {
        alert("valid email");
      }
    } else if (e.target.name == "forth") {
      e.preventDefault();
      if (form.password !== form.repassword) {
        alert("password and re password dont match");
      } else if (!form.password || !form.repassword) {
        alert("fill items");
      } else {
        setTimeout(() => {
          setForm((form) => ({
            ...form,
            forth: !form.forth,
          }));
          setForm((form) => ({
            ...form,
            fifth: !form.fifth,
          }));
        }, 500);
      }
    } else if (e.target.name == "fifth") {
      e.preventDefault()
       if (form.check2 == true) {
        informatin.push(form.name);
        informatin.push(form.lastname);
        informatin.push(form.day);
        informatin.push(form.month);
        informatin.push(form.year);
        informatin.push(form.sexual);
        informatin.push(form.email);
        informatin.push(form.password);
        informatin.push(form.repassword);
        informatin.push(form.phone);
        localStorage.setItem("userInfo", JSON.stringify(informatin));
        setForm((form) => ({
          ...form,
          fifth: !form.fifth,
        }));
        setForm((form) => ({
          ...form,
          six: !form.six,
        }));
        if (form.six == true) {
          let userData = JSON.parse(localStorage.getItem("userInfo"));
          console.log(userData);
          console.log(document.getElementById("lastdiv").innerText);
          document.getElementById("lastdiv").innerText = `name is ${userData[0]}
        last name is ${userData[1]}
        birthday is ${userData[2]} ${userData[3]} ${userData[4]}
        you are  ${userData[5]}
        email address is ${userData[6]}
        password is ${userData[7]}
        phone number is ${userData[9]}`;
        } else {
          document.getElementById(
            "lastdiv"
          ).innerText = `no information for showming you should agree with privicy warning`;
        }
      }
    } else if (e.target.name == "back1") {
      setForm((form) => ({
        ...form,
        second: !form.second,
      }));
      setForm((form) => ({
        ...form,
        first: !form.first,
      }));
    } else if (e.target.name == "back2") {
      setForm((form) => ({
        ...form,
        second: !form.second,
      }));
      setForm((form) => ({
        ...form,
        third: !form.third,
      }));
    } else if (e.target.name == "back3") {
      setForm((form) => ({
        ...form,
        third: !form.third,
      }));
      setForm((form) => ({
        ...form,
        forth: !form.forth,
      }));
    } else if (e.target.name == "back4") {
      setForm((form) => ({
        ...form , 
        check : !form.check
      }))
      setForm((form) => ({
        ...form,
        fifth: !form.fifth,
      }));
      setForm((form) => ({
        ...form,
        forth: !form.forth,
      }));
    }
  };

  return (
    <>
      {form.first && (
        <form>
          <label className="text-3xl font-semibold text-black" htmlFor="name">نام خود را وارید کنید</label>
          <div className="flex flex-col space-y-12 mb-20 mt-15 items-center">
          <input
            type="text"
            value={form.name}
            placeholder="    نام "
            id="name"
            name="name"
            onChange={changeHandler}
          />
          <input
            type="text"
            value={form.lastname}
            placeholder="    نام خانوادگی"
            id="last-name"
            name="lastname"
            onChange={changeHandler}
          />
          </div>
          <button
            type="submit"
            name="first"
            onClick={changeHandler}
          >
            ادامه
          </button>
        </form>
      )}
      {form.second && (
        <form >
          <label htmlFor="birthday" className="text-3xl font-semibold text-black ">: تاریخ تولد خود و جنسیت را مشخص کنید </label>
          <div className="flex flex-row justify-center mt-10 mb-5  items-center">
            <div>
              <select
                onChange={changeHandler}
                value={form.month}
                name="month"
                className="mr-1"
              >
                <option value="none">--ماه--</option>
                <option value="Janaury">فروردین</option>
                <option value="February">اردیبهشت</option>
                <option value="March">خرداد</option>
                <option value="April">تیر</option>
                <option value="November">مرداد</option>
                <option value="May">شهریور</option>
                <option value="June">مهر</option>
                <option value="July">آبان</option>
                <option value="August">آذر</option>
                <option value="September">دی</option>
                <option value="October">بهمن</option>
                
                <option value="December">اسنفد</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                onChange={changeHandler}
                maxLength={2}
                placeholder="روز"
                name="day"
                value={form.day}
                
              />
            </div>
            <div>
              <input
                type="number"
                onChange={changeHandler}
                maxLength={4}
                placeholder="سال"
                name="year"
                value={form.year}
                
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-row mb-20">
            <label htmlFor="check">
              آقا
            </label>
            <input
              type="radio"
              name="sexual"
              onChange={changeHandler}
              value="men"
              checked={form.sexual == "men"}
              className="mr-3 ml-1 w-3 h-3"
            />

            <label  htmlFor="check">
              خانم
            </label>
            <input
              type="radio"
              name="sexual"
              onChange={changeHandler}
              value="women"
              checked={form.sexual == "women"}
             className="mr-3 ml-1 w-3 h-3"
            />
          </div>
          <div className="flex flex-row-reverse justify-center">
            <button
              name="second"
              className="ml-3"
              type="submit"
              onClick={changeHandler}
            >
              ادامه
            </button>
            <button
              type="submit"
              name="back1"
              onClick={changeHandler}
            >
              بازگشت
            </button>
          </div>
        </form>
      )}
      {form.third && (
        <form>
         
          <label className="text-3xl font-semibold text-black " htmlFor="address"> : ایمیل خود را وارد کنید</label>
           <div className="flex flex-row justify-center mt-20 mb-[100pt] items-center">
            <input
            type="text"
            placeholder="exm@gmail.com"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
            </div>
          <div  className="flex flex-row-reverse justify-center" >
          <button
            onClick={changeHandler}
            className="mr-3 ml-3"
            type="submit"
            name="third"
          >
            ادامه
          </button>
          <button
            type="submit"
            name="back2"
            onClick={changeHandler}
          >
           بازگشت
          </button>
          </div>
        
        </form>
      )}
      {form.forth && (
        <form>

          <label className="text-3xl font-semibold text-black " htmlFor="password"> : رمز ورود بسازید</label>
          <div className="flex flex-col justify-center mt-10 mb-10  space-y-3 items-center">
          <input
            type="password"
            placeholder="رمز"
            id="password"
            name="password"
            defaultValue={form.password}
            onBlur={changeHandler}
          />
          <div id="root2"></div>
          <input
            type="password"
            placeholder="تکرار رمز"
            id="repassword"
            name="repassword"
            onChange={changeHandler}
          />

          <div className="flex justify-center items-center">
            <label>!!رمز را نشان بده</label>
            <input
              type="checkbox"
              name="check"
              onChange={changeHandler}
              checked={form.check}
              className="w-3 h-3 ml-1"
            />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-center">
          <button onClick={changeHandler} type="submit" className="mr-3 ml-3" name="forth">
            ادامه
          </button>
          <button
           type="submit"
            name="back3"
            
            className="mr-3 ml-3"
            onClick={changeHandler}
          >
            بازگشت
          </button>
          </div>
        </form>
      )}
      {form.fifth && (
        <form>
          <label className="text-3xl font-semibold text-black " htmlFor="name"> : شماره تلفن خود را وارد کنید</label>
          <div className="flex flex-col justify-center mb-10 mt-15 space-y-3 items-center">
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={changeHandler}
            value={form.phone}
            id="numberphone"
          />
          <label>
          <div className="flex justify-center items-center ">
            <a href="#" className="mr-1">قوانین وبسایت</a>
            <input
              type="checkbox"
              name="check2"
              onChange={changeHandler}
              checked={form.check2}
              className="w-3 h-3"
            />
            </div>
          </label>
          </div>
          <div className="flex flex-row-reverse justify-center">
          <button onClick={changeHandler} type="submit" className="mr-3 ml-3" name="fifth">
            ادامه
          </button>
          <button
           type="submit"
            name="back4"
            
            className="mr-3 ml-3"
            onClick={changeHandler}
          >
            بازگشت
          </button>
          </div>
        </form>
      )}
      <div id="lastdiv"></div>
    </>
  );
};

export default Login;

// const App = () => {
//   const [state, setState] = useState(0);

//   const call_plus = (state) => {
//     console.log(state)
//   }
//   const plus = () => {
//     setTimeout(() => {
//     setState((perv) => perv + 1)
//     setState((perv) => perv + 1)
//     setState((perv) => perv + 1)
//       call_plus(state)
//     },1000)

//   };

//   return (
//     <>
//       <button type="button" onClick={plus}>
//         plus
//       </button>
//       <h1>{state}</h1>
//     </>
//   );
// };

// export default App;

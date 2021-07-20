import React from 'react'
import styles from './Login.module.scss'
import { Field, Form, Formik } from 'formik'


const loginAuth = (value) => {
  console.log(value)
}

const Login = () => {
  return (
  <div className={styles.body}>
    <div className={styles.blur}>
      <Formik 
          initialValues={{
            email: '',
            password: '',
            rememberMe: false
          }}
          onSubmit={(values) => {
            loginAuth(values)
          }}
          >
            <Form className={styles.form}>
              <h3 className={styles.title}>Simple Flight Check</h3>
              <div className={styles.container}>
                <label className={styles.label} htmlFor="email">Логин:</label>
                <Field className={styles.input} id="email" name="email" type="email" />
              </div>
              <div className={styles.container}>
                <label className={styles.label} htmlFor="password">Пароль:</label>
                <Field className={styles.input} id="password" name="password" type="password" />
              </div>
              <div className={styles.option}>
              </div>
              <div className={styles.submitContainer}>
                <button className={styles.submit} type="submit">Войти</button>
              </div>
            </Form>
        </Formik>
    </div>
  </div>
  )
}

export default Login
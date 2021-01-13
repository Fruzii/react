import styles from './FormControls.module.css'

// 
// solution from youtube 
// for work in Field need //// const Input = Element("input");
export const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
    <Element {...input} {...props} />
    {hasError && <span>{meta.error}</span>}
  </div>
};


// 
// my solution
// const FormControl = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error
//   return <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//     {props.children}
//     {hasError && <span>{meta.error}</span>}
//   </div>
// }

// export const Input = (props) => {
//   const { input, meta, ...restProps } = props
//   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }

// export const Textarea = (props) => {
//   const { input, meta, ...restProps } = props
//   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }


// OLD
// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error
//   return <div className={`${styles.formControl} ${ hasError ? styles.error : ''}`}>
//     <input {...input} {...props}/>
//     {hasError && <span>{meta.error}</span>}
//   </div>
// }
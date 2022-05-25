import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Data {
  /**
   * Data name
   * @required
   */
  name: string;
  /**
   * Data items
   * @min 1
   */
  items: Array<{
    /**
     * Item title
     */
    title: string;
    /**
     * Item color
     * @required
     */
    color: 'red' | 'green';
    /**
     * Only required when color is green
     */
    value: string;
  }>;
}

export default function App() {
  const form = useFormik<Data>({
    initialValues: {
      name: '',
      items: [
        {
          title: '',
          color: 'red',
          value: '',
        },
      ],
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: (data) => console.log('data :>>', data),
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form onSubmit={form.handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

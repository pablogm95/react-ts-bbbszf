import * as React from 'react';
import './style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Data {
  /**
   * Data name
   * @required
   */
  name: string;
  /**
   * Configurator if the items title is required
   */
  areItemTitlesMandatory: boolean;
  /**
   * Data items
   * @min 1
   */
  items: Array<{
    /**
     * Item title
     * Only required when areItemTitlesMandatory is true
     */
    title: string;
    /**
     * Item color
     * @required
     */
    color: 'red' | 'green';
    /**
     * Only at least one required when color is green
     */
    values?: string[];
  }>;
}

export default function App() {
  const form = useFormik({
    initialValues: {
      name: '',
      items: [
        {
          title: '',
          color: 'red',
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

# Trazable Exercise

> [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-bbbszf)

The objective of this exercise is to be able to build a form, we will use [Formik](https://formik.org/) as help, and to obtain as a result the desired structure.
For this form to be valid it must fulfill a series of validations, these will be done with [Yup](https://github.com/jquense/yup#readme)

## Data model

```typescript
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
```

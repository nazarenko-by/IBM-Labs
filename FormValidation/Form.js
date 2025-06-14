import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Ім\'я повинно містити щонайменше 3 символи')
      .required('Ім\'я є обов\'язковим'),
    email: Yup.string()
      .email('Неправильна електронна адреса')
      .required('Електронна адреса є обов\'язковою'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Номер телефону повинен містити точно 10 цифр')
      .required('Номер телефону є обов\'язковим'),
    password: Yup.string()
      .min(6, 'Пароль повинен містити щонайменше 6 символів')
      .required('Пароль є обов\'язковим'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
      .required('Підтвердження пароля є обов\'язковим'),
});

const Form = () => {
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title} testID='formTitle'>Registration Form</Text>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <ScrollView contentContainerStyle={styles.container}>
                        <View testID='formName'>
                            <Text style={styles.label}>Ім'я</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            {touched.name && errors.name &&
                                <Text style={styles.error}>{errors.name}</Text>
                            }
                        </View>
                        <View testID='formEmail'>
                            <Text style={styles.label}>Електронна пошта</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {touched.email && errors.email &&
                                <Text style={styles.error}>{errors.email}</Text>
                            }
                        </View>
                        <View testID='formPhone'>
                            <Text style={styles.label}>Телефон</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                            />
                            {touched.phone && errors.phone &&
                                <Text style={styles.error}>{errors.phone}</Text>
                            }
                        </View>
                        <View testID='formPassword'>
                            <Text style={styles.label}>Пароль</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            {touched.password && errors.password &&
                                <Text style={styles.error}>{errors.password}</Text>
                            }
                        </View>
                        <View testID='formConfirmPassword'>
                            <Text style={styles.label}>Підтвердження пароля</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <Text style={styles.error}>{errors.confirmPassword}</Text>
                            )}
                        </View>
                        <Button onPress={handleSubmit} title="Відправити" color="#007BFF" />
                    </ScrollView>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: '#d9534f',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Form;

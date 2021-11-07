import styled, {css} from "styled-components";
import ImgIconError from "./icon-error.svg";
import {useForm} from "react-hook-form";

function FormComponent() {
    const {register, formState: {errors}, handleSubmit} = useForm({shouldFocusError: false});

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <FormContainer>
            <TrialButton>
                <Highlight>Try it free 7 days </Highlight>then $20/mo. thereafter
            </TrialButton>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormField
                        placeholder="First Name"
                        errors={errors.firstName}
                        register={
                            register(
                                "firstName",
                                {required: true, minLength: 3, maxLength: 20}
                            )
                        }
                    />
                    {errors.firstName && <IconError/>}
                    {
                        errors.firstName &&
                        <ErrorMessage>
                            {
                                errors.firstName.type === "required" &&
                                "First name is required"
                            }
                            {
                                errors.firstName.type === "minLength" &&
                                "First name must be at least 3 characters"
                            }
                            {
                                errors.firstName.type === "maxLength" &&
                                "First name must be at most 20 characters"
                            }
                        </ErrorMessage>
                    }
                </FormGroup>
                <FormGroup>
                    <FormField
                        placeholder="Last Name"
                        errors={errors.lastName}
                        register={
                            register(
                                "lastName",
                                {required: true, minLength: 3, maxLength: 20}
                            )
                        }
                    />
                    {errors.lastName && <IconError/>}
                    {
                        errors.lastName &&
                        <ErrorMessage>
                            {
                                errors.lastName.type === "required" &&
                                "Last name is required"
                            }
                            {
                                errors.lastName.type === "minLength" &&
                                "Last name must be at least 3 characters"
                            }
                            {
                                errors.lastName.type === "maxLength" &&
                                "Last name must be at most 20 characters"
                            }
                        </ErrorMessage>
                    }
                </FormGroup>
                <FormGroup>
                    <FormField
                        placeholder="Email Address"
                        errors={errors.email}
                        register={
                            register(
                                "email",
                                {required: true, pattern: /^\S+@\S+$/}
                            )
                        }
                    />
                    {errors.email && <IconError/>}
                    {
                        errors.email &&
                        <ErrorMessage>
                            {
                                errors.email.type === "required" &&
                                "Email is required"
                            }
                            {
                                errors.email.type === "pattern" &&
                                "Email is invalid"
                            }
                        </ErrorMessage>
                    }
                </FormGroup>
                <FormGroup>
                    <FormField
                        placeholder="Password"
                        type="password"
                        errors={errors.password}
                        register={
                            register(
                                "password",
                                {required: true, minLength: 3, maxLength: 20}
                            )
                        }
                    />
                    {errors.password && <IconError/>}
                    {
                        errors.password &&
                        <ErrorMessage>
                            {
                                errors.password.type === "required" &&
                                "Password is required"
                            }
                            {
                                errors.password.type === "minLength" &&
                                "Password must be at least 3 characters"
                            }
                            {
                                errors.password.type === "maxLength" &&
                                "Password must be at most 20 characters"
                            }
                        </ErrorMessage>
                    }
                </FormGroup>
                <Submit>
                    Claim your free trial
                </Submit>
                <TermsAndServices>
                    By clicking the button, you are agreeing to our <LinkTerms href="https://google.com"
                                                                               target="_blank">
                    Terms and Services</LinkTerms>
                </TermsAndServices>
            </Form>
        </FormContainer>

    )
}


const Form = styled.form`
  background-color: white;
  border-radius: 1rem;
  width: 38.57vw;
  padding-top: 3vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const baseFormField = ({register, ...props}) => {
    props.placeholder = props.errors ? "" : props.placeholder
    props.errors = props.errors ? "" : null
    return (
        <input
            {...props}
            {...register}
        />
    )
}

const InvalidStyle = css`
  border-color: #FF7979;
  color: #FF7979;
`

const baseIconError = ({...props}) => {
    return (
        <img
            src={ImgIconError}
            alt="Icon Error"
            {...props}
        />
    )
}

const IconError = styled(baseIconError)`
  width: 3vh;
  height: 3vh;
  position: relative;
  top: 5%;
  left: -7.5%;
`

const ErrorMessage = styled.p`
  color: #FF7979;
  width: 32.86vw;
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  margin-top: -2vh;
  text-align: right;
`

const FormGroup = styled.div`

`

const FormField = styled(baseFormField)`
  width: 32.86vw;
  height: 7vh;
  margin-bottom: 2.5vh;

  border-radius: 0.5rem;
  border-color: #F2F2F2;
  border-style: solid;
  border-width: 0.15rem;
  padding-left: 2.29vw;

  font-weight: 600;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: 0.017857rem;
  color: #3D3B48;

  :focus {
    border-color: purple;
    border-width: medium;
  }

  ${props => props.errors && InvalidStyle}

`

const baseSubmit = ({className, children}) => {
    return (
        <button className={className} type="submit">
            {children}
        </button>
    )
}

const Submit = styled(baseSubmit)`
  color: white;
  background: #38CC8B;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-width: 0;
  border-radius: 5px;
  padding: 2.5vh 0;
  width: 32.86vw;

  font-weight: 600;
  font-size: 1.2rem;
  line-height: 26px;

  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const TermsAndServices = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  /* identical to box height, or 236% */

  text-align: center;

  color: #BAB7D4;

`

const LinkTerms = styled.a`
  font-weight: bold;
  color: #FF7979;
  cursor: pointer;
  text-decoration: none;
`

const TrialButton = styled.button`
  width: 38.57vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  margin-bottom: 3.0vh;
  background-color: #5E54A4;
  color: white;

  border-radius: 1rem;
  border-width: 0;
  border-style: solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.267857px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    background-color: #443b86;
  }
`

const Highlight = styled.span`
  font-weight: bold;
`

const FormContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default FormComponent;
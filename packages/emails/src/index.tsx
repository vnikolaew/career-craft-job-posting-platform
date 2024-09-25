import WelcomeEmail from "./WelcomeEmail";
import ResetPasswordEmail from "./ResetPasswordEmail";
import ResetPasswordWithCodeEmail from "./ResetPasswordWithCodeEmail";
import AccountVerificationEmail from "./AccountVerificationEmail";
import NewJobListingsEmail from "./NewJobListingsEmail";
import CompanySignUpVerificationEmail from "./CompanySignUpVerificationEmail";
import { EmailService, SendMailRequest, SendMailResponse} from "./emailService";

export { WelcomeEmail, CompanySignUpVerificationEmail, ResetPasswordEmail, ResetPasswordWithCodeEmail, AccountVerificationEmail, NewJobListingsEmail  } ;
export { EmailService, type SendMailResponse, type SendMailRequest };
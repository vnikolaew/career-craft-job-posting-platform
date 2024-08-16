import { Resend } from "resend";
import { SendMailRequest, SendMailResponse } from "@repo/emails";
import { Service } from "typedi";

@Service()
export class EmailService {
   private resend: Resend;
   static RESEND_ONBOARDING_EMAIL = `Resend <onboarding@resend.dev>`;

   constructor() {
      this.resend = new Resend(process.env.AUTH_RESEND_KEY!);
   }

   public async sendMail({ to, subject, react, html }: SendMailRequest): Promise<SendMailResponse> {
      try {
         const { error, data } = await this.resend.emails.send({
            from: EmailService.RESEND_ONBOARDING_EMAIL,
            to: [to],
            subject,
            react,
            html,
         });

         if(error?.message) return { success: false, error: error.message };

         console.log(`E-mail successfully sent to: ${to} with ID: ${data?.id}`);
         return { success: true, id: data?.id! };
      } catch (err) {
         console.error(`An error occurred while sending a Welcome e-mail to: ${to}: ${err}`);
         return { success: false, error: err };
      }
   }
}

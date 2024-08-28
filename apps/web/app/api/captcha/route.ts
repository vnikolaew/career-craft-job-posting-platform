import { createCanvas } from 'canvas';
import { NextRequest } from "next/server";

export const runtime = 'nodejs'

export async function GET(req: NextRequest, res: Response) {
   const width = 200;
   const height = 50;
   const canvas = createCanvas(width, height);
   const ctx = canvas.getContext('2d');

   // Fill the background with blue color
   ctx.fillStyle = '#2c2fbf';
   ctx.fillRect(0, 0, width, height);

   // Draw some text on the canvas
   const text = 'LSra'; // Example text, you can randomize this
   ctx.font = '30px Arial';
   ctx.fillStyle = 'white';

   // Rotate and draw each letter individually
   const letters = text.split('');
   letters.forEach((letter, index) => {
      const angle = (Math.random() - 0.5) * 0.4; // Random rotation
      ctx.save();
      ctx.translate(30 + index * 40, 35);
      ctx.rotate(angle);
      ctx.fillText(letter, -10, 0);
      ctx.restore();
   });

   // Set the response header to indicate that this is an image
   res.headers.set('Content-Type', 'image/png');

   // Send the image as a response
   canvas.createPNGStream().pipe(res);
}

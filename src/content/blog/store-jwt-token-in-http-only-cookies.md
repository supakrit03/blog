---
title: 'Store JWT token in HttpOnly cookies'
description: ''
pubDate: 'June 08 2025'
heroImage: '/blog-placeholder.jpg'
setup:
---

เมื่อเราทำ Web application ส่วนใหญ่แล้วเราจำเป็นต้องทำฟีเจอร์ Auth หากต้องการระบุตัวตนผู้ใช้งานที่ให้งาน Website ซึ่งการทำ Auth ที่นิยมในปัจจุบันนั้นคงเป็นการ Token-based authentication ซึ่งจะ ใช้ token ในการระบุตัวตนของผู้ใช้งาน ขั้นตอนในการ auth คือการส่ง credentials (username or password etc.) ไปที่ server หาก credentials ถูกต้องก็จะได้รับ token กลับมาในการใช้ระบุตัวตนครั้งถัดไป.

ซึ่งส่วนใหญ่แล้วผู้เริ่มต้นทำ Web application คนส่วนใหญ่รู้ถึงผมด้วย มักจะเก็บ Token นั้นไว้ใน Local storage ซึ่งนั้นเราสามารถเข้าถึงข้อมูลใน Local storage ผ่าน javascript ได้นั้นจึงทำให้ Local storage  ค่อนข้างไม่ปลอดภัย ง่ายต่อการถูกขโมย token ผ่านการโจมตีแบบ XSS

ใช้ HttpOnly Cookies แทนที่ Local storage ในการเก็บ Token ซึ่งในเมื่อการเก็บ token ในที่ที่เข้าถึงข้อมูลได้ผ่าน javascript เราก็เปลี่ยนที่ในการเก็บนั้นก็คือ HttpOnly Cookies และการเก็บ token โดยในการเก็บข้อมูลในนี้ไม่สามารถเข้าถึงข้อมูลผ่าน javascript ได้ ยกเว้นฝั่ง server เท่านั้นที่สามารถเข้าถึงได้

ลองสร้าง server ขึ้นมาโดยใช้ Node.js dependcies ที่ใช้ได้แก่ express , cookie-parser , cors , jsonwebtoken

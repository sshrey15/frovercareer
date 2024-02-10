const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Seed the Job model
  const job1 = await prisma.job.create({
    data: {
      title: 'Software Engineer',
      description: 'Develop and maintain software applications',
      requirements: ['Bachelor\'s degree in Computer Science', '3+ years of experience'],
      skills: ['JavaScript', 'React', 'Node.js'],
      qualifications: 'Bachelor\'s degree',
      postedAt: new Date(),
    },
  })

  // Seed the Applicant model
  const applicant1 = await prisma.applicant.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      resume: 'johndoe_resume.pdf',
      coverLetter: 'johndoe_coverletter.pdf',
      skills: ['JavaScript', 'React'],
      experience: ['Software Engineer at XYZ Corp'],
      education: ['Bachelor\'s degree in Computer Science'],
      appliedAt: new Date(),
    },
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
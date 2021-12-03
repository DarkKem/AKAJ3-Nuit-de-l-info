const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'http://ec2-3-142-240-102.us-east-2.compute.amazonaws.com'
// export const server = 'http://localhost:3000'

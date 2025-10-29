# Next.js 16 API Build Errors

In this repository you will find three test cases for API Routes, one of which produces a build error.

## To reproduce

- Install dependencies

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Visit http://localhost:3000
```

- Create a build

```bash
pnpm build
```

## Test Case 1 (Using Try Catch)

- Code:
<img width="662" height="391" alt="Screenshot" src="https://github.com/user-attachments/assets/4af86f35-457e-476b-8065-c11963668304" />

- Build Error:
<img width="954" height="727" alt="Screenshot" src="https://github.com/user-attachments/assets/3deace98-0b77-4d3f-8230-6fd6d92ba7c0" />

- GET Request on Localhost (No problems):
<img width="413" height="161" alt="Screenshot" src="https://github.com/user-attachments/assets/b88492c7-e82f-45ec-aec0-1c4c12159787" />

- Build Error on Vercel deployment:
<img width="1492" height="685" alt="Screenshot" src="https://github.com/user-attachments/assets/d50183fd-b843-46c9-8548-c674e9e4596f" />

- GET Request on Vercel deployment (No problems):
<img width="605" height="164" alt="Screenshot" src="https://github.com/user-attachments/assets/20902121-711c-4f1f-b9a7-792a8a857b81" />

## Test Case 2 (Using await connection + Try Catch - No errors)

<img width="665" height="470" alt="Screenshot2" src="https://github.com/user-attachments/assets/65a80330-968e-4337-9b70-19d3733034b3" />

## Test Case 3 (Using nothing - No errors)

<img width="614" height="254" alt="Screenshot3" src="https://github.com/user-attachments/assets/449a4076-daa2-4f5e-af1f-1dfc9c8c0c70" />

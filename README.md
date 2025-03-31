# EXAM-BLOG

## Overview
EXAM-BLOG is a React-based blog application that fetches news articles from the News API and displays them with filtering options. Users can browse news based on different categories and read full articles.

## Features
- Fetches latest news from `wsj.com`
- Category-based filtering
- Responsive design using Bootstrap
- Read more functionality with a modal view

## Technologies Used
- React.js
- Bootstrap
- News API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vanshsukhiyaji07/EXAM-BLOG.git
   ```
2. Navigate to the project folder:
   ```bash
   cd EXAM-BLOG
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

## Usage
- The homepage displays news articles with images and descriptions.
- Click on category buttons to filter articles.
- Click "View More" to see the full article in a modal.
- Click "Read Full Article" to open the source link.

## API Key
The app uses the News API. Ensure you have a valid API key and replace it in the fetch URL inside `Blog.js`:

fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=YOUR_API_KEY")


## Contributing
1. Fork the repository.
2. Create a new branch:

   git checkout -b feature-branch
   
3. Make your changes and commit:
   
   git commit -m "Your message"
  
4. Push to the branch:

   git push origin feature-branch

5. Open a Pull Request.

##SCREENSHOTS
![Screenshot 2025-03-31 120324](https://github.com/user-attachments/assets/4bde5073-4dc8-4760-b152-c123967d085d)

![Screenshot 2025-03-31 120351](https://github.com/user-attachments/assets/7e9a1177-d186-4243-adff-23c992d1c0b2)

![Screenshot 2025-03-31 120416](https://github.com/user-attachments/assets/adcb5a3a-1aa3-487b-961d-e9b5ac0abf49)

![Screenshot 2025-03-31 120432](https://github.com/user-attachments/assets/400e5998-023b-4513-be7a-fc1d07956cb9)



## License
This project is licensed under the MIT License.

## Contact
For any queries, reach out via [GitHub Issues](https://github.com/vanshsukhiyaji07/EXAM-BLOG/issues).


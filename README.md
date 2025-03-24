# Exhibition Curation Platform

View this project live: https://exhibition-curation-platform-yh57.onrender.com/

Watch an overview of the project: https://youtu.be/6V-iEOFBMI0

Visit the frontend repo: https://github.com/martinsutch/exhibition-curation-platform.git

## Project Overview

**Exhibit** enables users to explore virtual exhibitions featuring artworks from various museums and universities. This platform is tailored for researchers, students, and art enthusiasts, providing an interactive and engaging way to explore collections of antiquities and fine art from across the world. Users can search for artworks, create personal exhibitions, and curate their own collection of pieces from these global repositories.

## Minimum Viable Product (MVP)

The platform meets the following MVP features:

1. **Search Artwork**: Users can search for artworks across collections from at least two different Museum or University APIs.
2. **Browse Artworks**: Users can browse artworks in a list view with pagination (Previous/Next) to prevent excessive loading of items at once.
3. **Filter and Sort Artworks**: Users can filter and/or sort artworks to easily navigate large collections.
4. **Display Artwork Details**: Each artwork has its own page and is displayed with its image and essential details such as title, creator, and description.
5. **Personal Exhibitions**: Users can create, add items to, and remove items from personal _collections_ of saved artworks. Multiple collections can be managed by a single user.
6. **View Exhibitions**: Users can view their saved exhibitions and the items within each collection.

## Tech Choices

### Programming Languages

- **JavaScript** (for front-end)
- **TypeScript** (for back-end)

## UI Requirements

- **Responsive Design**: The platform is fully responsive and adapts well across all screen sizes, providing an optimal viewing experience for users on mobile, tablet, and desktop devices.
- **Accessibility**: The design ensures accessibility by supporting screen readers and keyboard navigation, making the platform usable by a wide range of users.
- **User Feedback**: The platform clearly indicates loading states when content is being fetched, and displays error messages when something goes wrong (e.g., failed requests or missing fields).
- **Intuitive Navigation**: The user interface is simple and intuitive, guiding users to easily search for, view, and curate artworks into personal exhibitions.

## Skills Demonstrated

During the development of the **Exhibition Curation Platform**, I have demonstrated the following skills:

1. **API Integration**: Successfully integrated at least two museum/university APIs to fetch collection data and display it to users.
2. **Frontend Development**: Utilised **React** to create a dynamic and responsive user interface. Implemented state management, routing, and API data fetching using **TanStack** and **React Query**.
3. **Backend Development**: Built a back-end server with **Express** and **TypeScript** to handle user authentication and storage of exhibition collections.
4. **User Authentication**: Implemented secure user authentication, allowing users to create accounts, log in, and save curated exhibitions to their profiles.
5. **UI/UX Design**: Designed a user-friendly and visually appealing interface that ensures users can easily search for, filter, and save artworks to their personal collections.
6. **Version Control and Collaboration**: Used **Git** and **GitHub** for version control, enabling effective collaboration and management of code throughout the project.

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/martinsutch/exhibition-curation-platform.git
   ```

2. Navigate into the project folder:

   ```bash
   cd exhibition-curation-platform
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

5. Visit the URL given to view the platform locally.

// MOCK DATA - EEE BOOTCAMP

// Individual Batch Data (2024-2028)
// In the future, you would add more constants like these for other batches.
// =====================================================================

const PROFILES_2024_2028 = [
    {
        id: 'B324001',
        name: 'Alex Doe',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=AD',
        bio: 'Aspiring Robotics Engineer. Passionate about AI and machine learning.',
        linkedin: 'https://linkedin.com/in/alexdoe',
        instagram: 'https://instagram.com/alexdoe',
    },
    {
        id: 'B324002',
        name: 'Jane Smith',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=JS',
        bio: 'Future Power Systems Specialist. Interested in renewable energy solutions.',
        linkedin: 'https://linkedin.com/in/janesmith',
        instagram: 'https://instagram.com/janesmith',
    },
    {
        id: 'B324003',
        name: 'Sam Wilson',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=SW',
        bio: 'Embedded Systems enthusiast. Loves working with microcontrollers.',
        linkedin: 'https://linkedin.com/in/samwilson',
        instagram: 'https://instagram.com/samwilson',
    },
];

const ACHIEVEMENTS_2024_2028 = [
    {
        studentName: 'Jane Smith',
        title: 'Won 1st Place in National Robotics Competition',
        description: 'Led a team to victory at the TechFest 2025, showcasing an innovative autonomous bot.',
        type: 'Competition',
    },
    {
        studentName: 'Alex Doe',
        title: 'Published Research Paper on AI Ethics',
        description: 'Co-authored a paper on the ethical implications of AI in modern society, published in the IEEE journal.',
        type: 'Academics',
    },
];

const GALLERY_2024_2028 = [
    { src: 'https://placehold.co/600x400/D8B4F8/fff?text=Event+1', alt: 'Photo from a college event' },
    { src: 'https://placehold.co/600x400/944E63/fff?text=Workshop', alt: 'Photo from a workshop' },
    { src: 'https://placehold.co/600x400/CAA6A6/fff?text=Lab+Session', alt: 'Photo from a lab session' },
    { src: 'https://placehold.co/600x400/B4E4FF/fff?text=Fest+2025', alt: 'Photo from the annual fest' },
];

// Site Contributor Data
// =====================================================================

export const DEVS = [
    {
        id: 'dev-1',
        name: 'Your Name',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=YN',
        linkedin: '#',
    },
    {
        id: 'dev-2',
        name: 'Contributor Name',
        imageUrl: 'https://placehold.co/200x200/F2BED1/343A40?text=CN',
        linkedin: '#',
    },
];

// Master Data Assembly
// This is where we combine all the individual data pieces for the app to use.
// =====================================================================

export const batches = [
    {
        year: '2024-28',
        description: 'The pioneering batch of the EEE Bootcamp website, setting the standard for future generations.',
        students: PROFILES_2024_2028,
        achievements: ACHIEVEMENTS_2024_2028,
        gallery: GALLERY_2024_2028,
    },
    // To add a new batch in the future, you would create its data constants above
    // and then add a new object to this array, like this:
    // {
    //   year: '2025-29',
    //   description: 'The second batch...',
    //   students: PROFILES_2025_2029,
    //   achievements: ACHIEVEMENTS_2025_2029,
    //   gallery: GALLERY_2025_2029,
    // }
];

// This combines all batch galleries for the main gallery page.
export const GALLERY_IMAGES = batches.flatMap(batch => batch.gallery);


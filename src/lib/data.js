// MOCK DATA - EEE BOOTCAMP

// Individual Batch Data (2024-2028)
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
];

const HIGHLIGHTS_2024_2028 = [
    {
        studentName: 'Jane Smith',
        title: 'Won 1st Place in National Robotics Competition',
        description: 'Led a team to victory at the TechFest 2025, showcasing an innovative autonomous bot.',
        type: 'Competition',
        imageUrl: 'https://placehold.co/800x600/944E63/fff?text=Robotics+Win',
    },
    {
        studentName: 'Alex Doe',
        title: 'Published Paper on AI Ethics',
        description: 'Co-authored a paper that was accepted into the International Conference on AI.',
        type: 'Academics',
        imageUrl: 'https://placehold.co/800x600/D8B4F8/fff?text=AI+Paper',
    },
];

const GALLERY_2024_2028 = [
    { src: 'https://placehold.co/600x400/D8B4F8/fff?text=Event+1', alt: 'Photo from a college event' },
    { src: 'https://placehold.co/600x400/944E63/fff?text=Workshop', alt: 'Photo from a workshop' },
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
];

// Master Data Assembly
// =====================================================================

export const batches = [
    {
        year: '2024-28',
        description: 'The pioneering batch of the EEE Bootcamp website, setting the standard for future generations.',
        students: PROFILES_2024_2028,
        highlights: HIGHLIGHTS_2024_2028, // Renamed from achievements
        gallery: GALLERY_2024_2028,
    },
];

// Combines all batch galleries for the main gallery page.
export const GALLERY_IMAGES = batches.flatMap(batch => batch.gallery);


const APP_DATA_KEY = 'appData';
const CURRENT_USER_KEY = 'currentUser';

function getAppData() {
    const data = localStorage.getItem(APP_DATA_KEY);
    if (data) {
        return JSON.parse(data);
    }
    seedMockData();
    return getAppData();
}

function setAppData(data) {
    localStorage.setItem(APP_DATA_KEY, JSON.stringify(data));
}

function updateAppData(updaterFn) {
    const currentData = getAppData();
    const updatedData = updaterFn(currentData);
    setAppData(updatedData);
    return updatedData;
}

function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function seedMockData() {
    const SERVICE_CATEGORIES = ["Electrician", "Plumber", "Carpenter", "Tutor", "Mechanic", "Painter", "AC Repair", "Cleaner"];

    const mockUsers = [
        {
            id: "prov-001",
            name: "Rajesh Kumar",
            role: "provider",
            serviceCategory: "Electrician",
            hourlyRate: 400,
            rating: 4.8,
            reviewCount: 56,
            location: "Andheri",
            phone: "+91 9876543201",
            email: "rajesh.kumar@email.com",
            bio: "Experienced electrician with 10+ years of service in Mumbai. Specializing in residential wiring, repairs, and installations.",
            availability: "Mon-Sat, 8AM-6PM",
            completedJobs: 234,
            joinedDate: "2024-01-15",
            available: false
        },
        {
            id: "prov-002",
            name: "Sunita Patil",
            role: "provider",
            serviceCategory: "Plumber",
            hourlyRate: 350,
            rating: 4.6,
            reviewCount: 34,
            location: "Bandra",
            phone: "+91 9876543202",
            email: "sunita.patil@email.com",
            bio: "Professional plumber offering pipe fitting, leak repairs, and bathroom installations.",
            availability: "Mon-Fri, 9AM-5PM",
            completedJobs: 156,
            joinedDate: "2024-03-20",
            available: true
        },
        {
            id: "prov-003",
            name: "Mohan Das",
            role: "provider",
            serviceCategory: "Carpenter",
            hourlyRate: 500,
            rating: 4.9,
            reviewCount: 78,
            location: "Dadar",
            phone: "+91 9876543203",
            email: "mohan.das@email.com",
            bio: "Expert carpenter specializing in furniture making, repairs, and custom woodwork.",
            availability: "Mon-Sat, 7AM-7PM",
            completedJobs: 312,
            joinedDate: "2023-11-10",
            available: true
        },
        {
            id: "prov-004",
            name: "Priya Nair",
            role: "provider",
            serviceCategory: "Tutor",
            hourlyRate: 600,
            rating: 5.0,
            reviewCount: 92,
            location: "Powai",
            phone: "+91 9876543204",
            email: "priya.nair@email.com",
            bio: "IIT Bombay graduate offering personalized tutoring in Mathematics, Physics, and Chemistry for students from 6th to 12th standard.",
            availability: "Mon-Sat, 4PM-8PM",
            completedJobs: 445,
            joinedDate: "2023-08-05",
            available: true
        },
        {
            id: "prov-005",
            name: "Anil Mehta",
            role: "provider",
            serviceCategory: "Mechanic",
            hourlyRate: 450,
            rating: 4.7,
            reviewCount: 45,
            location: "Kurla",
            phone: "+91 9876543205",
            email: "anil.mehta@email.com",
            bio: "Certified automobile mechanic specializing in car repairs, servicing, and maintenance.",
            availability: "Mon-Sat, 8AM-6PM",
            completedJobs: 189,
            joinedDate: "2024-02-01",
            available: true
        },
        {
            id: "prov-006",
            name: "Deepa Rao",
            role: "provider",
            serviceCategory: "Painter",
            hourlyRate: 380,
            rating: 4.5,
            reviewCount: 28,
            location: "Malad",
            phone: "+91 9876543206",
            email: "deepa.rao@email.com",
            bio: "Professional painter offering interior and exterior painting, texture work, and waterproofing.",
            availability: "Mon-Sat, 7AM-5PM",
            completedJobs: 98,
            joinedDate: "2024-04-15",
            available: true
        },
        {
            id: "prov-007",
            name: "Vikram Singh",
            role: "provider",
            serviceCategory: "AC Repair",
            hourlyRate: 550,
            rating: 4.8,
            reviewCount: 61,
            location: "Borivali",
            phone: "+91 9876543207",
            email: "vikram.singh@email.com",
            bio: "Expert AC technician for all brands - installation, servicing, gas refilling, and repairs.",
            availability: "Mon-Sat, 9AM-6PM",
            completedJobs: 267,
            joinedDate: "2023-12-01",
            available: true
        },
        {
            id: "prov-008",
            name: "Kavya Joshi",
            role: "provider",
            serviceCategory: "Cleaner",
            hourlyRate: 300,
            rating: 4.4,
            reviewCount: 19,
            location: "Thane",
            phone: "+91 9876543208",
            email: "kavya.joshi@email.com",
            bio: "Professional home cleaner offering deep cleaning, regular maintenance, and sanitization services.",
            availability: "Daily, 8AM-4PM",
            completedJobs: 76,
            joinedDate: "2024-05-01",
            available: true
        },
        {
            id: "prov-009",
            name: "Suresh Iyer",
            role: "provider",
            serviceCategory: "Electrician",
            hourlyRate: 420,
            rating: 4.7,
            reviewCount: 38,
            location: "Chembur",
            phone: "+91 9876543209",
            email: "suresh.iyer@email.com",
            bio: "Licensed electrician with expertise in commercial and residential electrical systems.",
            availability: "Mon-Sat, 8AM-7PM",
            completedJobs: 145,
            joinedDate: "2024-01-25",
            available: true
        },
        {
            id: "prov-010",
            name: "Meena Pillai",
            role: "provider",
            serviceCategory: "Tutor",
            hourlyRate: 580,
            rating: 4.9,
            reviewCount: 83,
            location: "Juhu",
            phone: "+91 9876543210",
            email: "meena.pillai@email.com",
            bio: "Experienced educator specializing in English, Mathematics, and Science for ICSE and CBSE students.",
            availability: "Mon-Sat, 3PM-8PM",
            completedJobs: 378,
            joinedDate: "2023-09-15",
            available: true
        },
        {
            id: "cust-001",
            name: "Amit Shah",
            role: "customer",
            location: "Andheri",
            phone: "+91 9988776601",
            email: "amit.shah@email.com",
            joinedDate: "2024-06-10"
        },
        {
            id: "cust-002",
            name: "Neha Verma",
            role: "customer",
            location: "Bandra",
            phone: "+91 9988776602",
            email: "neha.verma@email.com",
            joinedDate: "2024-07-05"
        },
        {
            id: "cust-003",
            name: "Rohit Gupta",
            role: "customer",
            location: "Dadar",
            phone: "+91 9988776603",
            email: "rohit.gupta@email.com",
            joinedDate: "2024-08-20"
        },
        {
            id: "admin-001",
            name: "Admin User",
            role: "admin",
            phone: "+91 9876500000",
            email: "admin@servenow.com",
            joinedDate: "2024-01-01"
        }
    ];

    const mockBookings = [
        {
            id: "book-001",
            customerId: "cust-001",
            providerId: "prov-001",
            serviceCategory: "Electrician",
            description: "Need to fix electrical wiring in the kitchen. Some switches are not working properly.",
            status: "pending",
            negotiation: [],
            finalPrice: null,
            createdAt: "2026-02-25T10:30:00Z",
            updatedAt: "2026-02-25T10:30:00Z"
        },
        {
            id: "book-002",
            customerId: "cust-002",
            providerId: "prov-003",
            serviceCategory: "Carpenter",
            description: "Custom wardrobe installation needed for master bedroom. Size approximately 6x8 feet.",
            status: "pending",
            negotiation: [],
            finalPrice: null,
            createdAt: "2026-02-26T09:15:00Z",
            updatedAt: "2026-02-26T09:15:00Z"
        },
        {
            id: "book-003",
            customerId: "cust-003",
            providerId: "prov-004",
            serviceCategory: "Tutor",
            description: "Looking for Mathematics and Physics tutor for Class 10 student. Need 4 sessions per week.",
            status: "negotiating",
            negotiation: [
                { from: "customer", message: "Hello, I'm interested in your tutoring services. My son needs help with Math and Physics.", timestamp: "2026-02-24T14:00:00Z" },
                { from: "provider", message: "Hi! I'd be happy to help. Could you share more about the syllabus and specific topics he struggles with?", timestamp: "2026-02-24T15:30:00Z" },
                { from: "customer", message: "He follows CBSE board. Mainly Algebra and Geometry in Math, and Mechanics in Physics.", timestamp: "2026-02-24T16:00:00Z" },
                { from: "provider", message: "I can help with that. My rate is ₹600/hour. I offer online and in-person sessions. Would you prefer evening sessions?", timestamp: "2026-02-24T17:00:00Z", offer: 600 }
            ],
            finalPrice: null,
            createdAt: "2026-02-24T14:00:00Z",
            updatedAt: "2026-02-24T17:00:00Z"
        },
        {
            id: "book-004",
            customerId: "cust-001",
            providerId: "prov-002",
            serviceCategory: "Plumber",
            description: "Bathroom tap is leaking and needs immediate repair. Water is dripping continuously.",
            status: "accepted",
            negotiation: [],
            finalPrice: 400,
            createdAt: "2026-02-23T11:00:00Z",
            updatedAt: "2026-02-23T12:00:00Z",
            scheduledDate: "2026-02-27T10:00:00Z"
        },
        {
            id: "book-005",
            customerId: "cust-002",
            providerId: "prov-007",
            serviceCategory: "AC Repair",
            description: "Split AC not cooling properly. Freon might be low or there could be a leak.",
            status: "accepted",
            negotiation: [],
            finalPrice: 700,
            createdAt: "2026-02-22T08:00:00Z",
            updatedAt: "2026-02-22T09:30:00Z",
            scheduledDate: "2026-02-26T14:00:00Z"
        },
        {
            id: "book-006",
            customerId: "cust-003",
            providerId: "prov-009",
            serviceCategory: "Electrician",
            description: "Need to install new ceiling fans in 3 rooms. Already have the fans purchased.",
            status: "working",
            negotiation: [],
            finalPrice: 900,
            createdAt: "2026-02-20T10:00:00Z",
            updatedAt: "2026-02-26T08:00:00Z",
            scheduledDate: "2026-02-26T09:00:00Z",
            startTime: "2026-02-26T09:00:00Z"
        },
        {
            id: "book-007",
            customerId: "cust-001",
            providerId: "prov-010",
            serviceCategory: "Tutor",
            description: "English language and literature classes for improving communication skills.",
            status: "completed",
            negotiation: [],
            finalPrice: 2400,
            createdAt: "2026-02-01T10:00:00Z",
            updatedAt: "2026-02-20T18:00:00Z",
            scheduledDate: "2026-02-05T16:00:00Z",
            completedDate: "2026-02-20T18:00:00Z"
        },
        {
            id: "book-008",
            customerId: "cust-002",
            providerId: "prov-008",
            serviceCategory: "Cleaner",
            description: "Deep cleaning required for 2BHK apartment before moving in.",
            status: "cancelled",
            negotiation: [],
            finalPrice: null,
            createdAt: "2026-02-18T10:00:00Z",
            updatedAt: "2026-02-19T10:00:00Z",
            cancellationReason: "Customer decided to postpone"
        }
    ];

    const mockReviews = [
        {
            id: "rev-001",
            bookingId: "book-007",
            customerId: "cust-001",
            providerId: "prov-010",
            rating: 5,
            comment: "Excellent tutoring! My English has improved significantly. Meena is very patient and explains concepts clearly. Highly recommended for anyone looking to improve their language skills.",
            createdAt: "2026-02-21T10:00:00Z"
        },
        {
            id: "rev-002",
            customerId: "cust-003",
            providerId: "prov-005",
            rating: 4,
            comment: "Great mechanic! Fixed my car engine issue quickly. The service was professional and reasonably priced. Will definitely recommend to friends.",
            createdAt: "2026-02-15T14:30:00Z"
        }
    ];

    const appData = {
        users: mockUsers,
        bookings: mockBookings,
        reviews: mockReviews,
        serviceCategories: SERVICE_CATEGORIES,
        version: "1.0.0",
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('appData', JSON.stringify(appData));
}

function initializeApp() {
    const existingData = localStorage.getItem('appData');
    if (!existingData) {
        seedMockData();
    }
}

initializeApp();

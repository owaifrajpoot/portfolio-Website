import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';
import './Blog.css';

export default function Blog() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development. From AI-powered tools to advanced frameworks, discover what's next in the digital landscape.",
      content: `The web development landscape is evolving at an unprecedented pace, driven by rapid technological advancements and changing user expectations. As we move deeper into 2024, several key trends are reshaping how we build and deploy web applications.

**AI-Powered Development Tools**
Artificial Intelligence is revolutionizing the development process. Tools like GitHub Copilot, Amazon CodeWhisperer, and Tabnine are becoming indispensable for developers, offering intelligent code completion, bug detection, and even code generation. These AI assistants not only speed up development but also help maintain code quality and consistency across projects.

**Advanced JavaScript Frameworks**
React continues to dominate, but we're seeing exciting developments in frameworks like Next.js 14 with its App Router, Vue 3's Composition API, and Svelte's compile-time approach. The focus is shifting towards better performance, developer experience, and built-in optimizations.

**WebAssembly (WASM)**
WebAssembly is gaining traction for performance-critical applications. It allows developers to run code written in languages like C++, Rust, and Go directly in the browser at near-native speeds. This opens up possibilities for complex applications like video editing, 3D graphics, and real-time data processing in the browser.

**Progressive Web Apps (PWAs)**
PWAs are becoming the standard for modern web applications. With features like offline functionality, push notifications, and app-like experiences, PWAs bridge the gap between web and native applications. Major platforms are investing heavily in PWA support, making them essential for businesses.

**Micro-Frontends Architecture**
Large applications are adopting micro-frontends to improve maintainability and team autonomy. This architecture allows different teams to work on different parts of the application independently, using their preferred technologies and deployment cycles.

**Performance and Core Web Vitals**
Google's Core Web Vitals are now crucial for SEO and user experience. Developers must focus on metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Tools like Lighthouse and PageSpeed Insights help monitor and optimize these metrics.

**The Rise of Edge Computing**
Edge computing is changing how we deploy applications. CDNs are evolving into edge computing platforms, allowing developers to run serverless functions closer to users. This reduces latency and improves performance for global applications.

**Sustainability in Web Development**
As environmental concerns grow, sustainable web development practices are gaining attention. This includes optimizing code for energy efficiency, reducing server loads, and choosing green hosting providers. Developers are becoming more conscious of their applications' carbon footprint.

The future of web development is exciting and challenging. Success will depend on staying adaptable, continuously learning, and embracing new technologies while maintaining focus on user experience and performance.`
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating scalable React applications that can handle growing user bases and complex requirements. Discover architectural patterns and optimization techniques.",
      content: `Building scalable React applications requires careful planning, solid architecture, and adherence to best practices. As applications grow in complexity and user base, maintaining performance and code quality becomes increasingly challenging.

**Component Architecture Patterns**
The foundation of any scalable React application lies in its component architecture. Atomic Design methodology provides a systematic approach to building components:

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple combinations of atoms (search bars, form fields)
- **Organisms**: Complex UI components (headers, product lists)
- **Templates**: Page-level components
- **Pages**: Specific instances of templates

This approach ensures consistency, reusability, and maintainability across the application.

**State Management Strategies**
For large applications, choosing the right state management solution is crucial:

**Redux Toolkit**: For complex state with predictable updates
**Zustand**: Lightweight alternative for simpler state needs
**React Query**: For server state management
**Context API**: For theme, authentication, and other global state

**Code Splitting and Lazy Loading**
Performance is critical for scalability. Implement code splitting using React.lazy() and Suspense:

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

**Performance Optimization Techniques**
1. **Memoization**: Use React.memo() for expensive components
2. **useMemo and useCallback**: Prevent unnecessary re-renders
3. **Virtual Scrolling**: For large lists and data tables
4. **Image Optimization**: Lazy loading and proper formats
5. **Bundle Analysis**: Regular monitoring of bundle size

**Testing Strategy**
A comprehensive testing strategy is essential for scalable applications:

- **Unit Tests**: For individual components and functions
- **Integration Tests**: For component interactions
- **E2E Tests**: For critical user journeys
- **Performance Tests**: For monitoring performance regressions

**Folder Structure and Organization**
A well-organized folder structure supports scalability:

\`\`\`
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── hooks/
├── services/
├── utils/
├── types/
└── pages/
\`\`\`

**Error Boundaries**
Implement error boundaries to gracefully handle errors and prevent application crashes:

\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
\`\`\`

**Monitoring and Analytics**
Implement comprehensive monitoring:
- Error tracking (Sentry, LogRocket)
- Performance monitoring (New Relic, DataDog)
- User analytics (Google Analytics, Mixpanel)
- Custom metrics for business KPIs

**Deployment and CI/CD**
Automate deployment processes:
- Automated testing in CI/CD pipelines
- Staging environments for testing
- Blue-green deployments for zero downtime
- Feature flags for gradual rollouts

**Documentation and Knowledge Sharing**
Maintain comprehensive documentation:
- Component documentation (Storybook)
- API documentation
- Architecture decisions (ADRs)
- Coding standards and guidelines

Building scalable React applications is an ongoing process that requires continuous improvement, monitoring, and adaptation to changing requirements.`
    },
    {
      id: 3,
      title: "The Art of User Experience Design",
      excerpt: "Dive into the principles of effective UX design and learn how to create interfaces that users love. From research to prototyping, master the art of user-centered design.",
      content: `User Experience Design is more than just making things look pretty—it's about creating meaningful, functional, and delightful experiences that solve real problems for real users. This comprehensive guide explores the fundamental principles and processes of effective UX design.

**Understanding User-Centered Design**
User-centered design puts the user at the heart of every decision. This approach involves:

- **Empathy**: Understanding users' needs, goals, and pain points
- **Research**: Gathering insights through various methods
- **Iteration**: Continuously improving based on feedback
- **Accessibility**: Ensuring designs work for everyone

**The UX Design Process**

**1. Research Phase**
Effective UX design starts with thorough research:

- **User Interviews**: Direct conversations with target users
- **Surveys**: Quantitative data collection
- **Analytics**: Understanding current user behavior
- **Competitive Analysis**: Learning from existing solutions
- **Persona Development**: Creating detailed user profiles

**2. Information Architecture**
Organizing information in a logical, intuitive way:

- **Card Sorting**: Understanding how users categorize information
- **Site Maps**: Visualizing the structure of information
- **User Flows**: Mapping user journeys through the application
- **Wireframes**: Low-fidelity layouts focusing on structure

**3. Visual Design Principles**
Creating visually appealing and functional interfaces:

**Typography**
- Choose readable fonts (16px minimum for body text)
- Establish clear hierarchy with font sizes and weights
- Ensure sufficient contrast ratios (4.5:1 minimum)
- Use appropriate line spacing (1.4-1.6 for body text)

**Color Theory**
- Use color to guide attention and create hierarchy
- Ensure accessibility with proper contrast ratios
- Consider color psychology and cultural associations
- Implement consistent color systems

**Layout and Grid Systems**
- Use grid systems for consistent alignment
- Implement responsive design principles
- Create visual hierarchy through spacing
- Balance white space and content

**4. Interaction Design**
Designing how users interact with your interface:

**Micro-interactions**
- Provide immediate feedback for user actions
- Use animations to guide attention
- Create delightful moments throughout the experience
- Ensure animations serve a purpose

**Form Design**
- Minimize cognitive load
- Provide clear labels and instructions
- Use progressive disclosure for complex forms
- Implement real-time validation
- Show progress indicators for multi-step processes

**5. Usability Testing**
Validating designs with real users:

**Testing Methods**
- **Moderated Testing**: Direct observation of user behavior
- **Unmoderated Testing**: Remote testing with tools like UserTesting
- **A/B Testing**: Comparing different design variations
- **Analytics**: Tracking user behavior patterns

**Key Metrics to Track**
- Task completion rates
- Time on task
- Error rates
- User satisfaction scores
- Conversion rates

**6. Accessibility and Inclusive Design**
Designing for all users:

**WCAG Guidelines**
- Perceivable: Information must be presentable to users
- Operable: Interface components must be operable
- Understandable: Information and operation must be understandable
- Robust: Content must be robust enough for assistive technologies

**Implementation Checklist**
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Alternative text for images
- Focus indicators for interactive elements

**7. Mobile-First Design**
Designing for mobile devices first:

**Responsive Design Principles**
- Fluid grids and flexible images
- Media queries for different screen sizes
- Touch-friendly interface elements
- Optimized performance for mobile networks

**Mobile-Specific Considerations**
- Thumb-friendly navigation
- Simplified content for smaller screens
- Fast loading times
- Offline functionality where appropriate

**8. Performance and UX**
Performance is a crucial aspect of user experience:

**Optimization Strategies**
- Optimize images and assets
- Minimize HTTP requests
- Implement lazy loading
- Use CDNs for faster delivery
- Monitor Core Web Vitals

**9. Continuous Improvement**
UX design is an iterative process:

**Feedback Loops**
- Regular user testing
- Analytics monitoring
- User feedback collection
- A/B testing for optimization

**Design Systems**
- Create reusable component libraries
- Establish design tokens and guidelines
- Maintain consistency across platforms
- Document design decisions

**10. The Future of UX Design**
Emerging trends and technologies:

**AI and Machine Learning**
- Personalized user experiences
- Predictive analytics
- Automated design systems
- Voice and conversational interfaces

**Virtual and Augmented Reality**
- Immersive experiences
- Spatial computing interfaces
- 3D interaction design
- Mixed reality applications

Creating exceptional user experiences requires a deep understanding of users, thoughtful design processes, and continuous iteration. The best UX designers combine analytical thinking with creative problem-solving to create solutions that not only meet user needs but exceed their expectations.`
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-page">
      <div>
        <Spline scene="https://prod.spline.design/SRsfuWctp8M5HnOR/scene.splinecode" />
      </div>
      
      {/* Back Arrow */}
      <button className="back-arrow" onClick={() => navigate('/')}>
        <span className="arrow-icon">←</span>
        <span className="back-text">Back to Home</span>
      </button>

      {/* Blog Content */}
      <div className="blog-content">
        <h1 className="blog-title">Blog</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <button 
                className="read-more-btn" 
                onClick={() => setSelectedPost(post)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Top Center - owaif-portfolio.com */}
      <div className="top-center">
        <p>owaif-portfolio.com</p>
      </div>

      {/* Right Menu - About, Blog, LinkedIn */}
      <div className="right-menu">
        <ul>
          <li
            className="clickable"
            onClick={() => navigate('/about')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            About
          </li>
          <li
            className="clickable"
            onClick={() => navigate('/blog')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            Blog
          </li>
          <li
            className="clickable"
            onClick={() => window.open('https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME', '_blank', 'noopener,noreferrer')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            LinkedIn
          </li>
        </ul>
      </div>

      {/* Popup for blog posts */}
      {selectedPost && (
        <div className="popup-overlay" onClick={() => setSelectedPost(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPost(null)}>
              ×
            </button>
            <h2 className="popup-title">{selectedPost.title}</h2>
            <div className="popup-body">
              <div className="popup-paragraph" dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br><br>') }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

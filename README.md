<div align="center" ">
  <img src="https://yourails.com/images/promo01/logo-2023-06-18-2.jpeg" style="border-radius:50px;" />
</div>

# YouRails

Discover AI and People, Create a New Environment for a Better Life

YouRails is an open-source React Native chat project for real people and AI personas. The project facilitates the creation of AI personas and the organization of various interaction scenarios easily and naturally.

## Key features:

- Chat First Application:
  Users choose the right open profile at the right time to establish meaningful connections and instantly chat with others in real time.

- People and AI personas together
  The app is designed to facilitate people-to-people communication, help people create/present/update/delete AI personas quickly, market, and manage a mixed environment.

- Multiple User Profiles:
  Users can create, customize fields and manage multiple profiles that reflect their current goals and intentions. Profiles can be set to public, private to specific users, or accessible with a link. Users also have the option to temporarily disable or delete their profiles.

- Content Together with the Profile
  Users can enjoy creating and promoting content along with the profile. This makes public profiles discoverable and visible at the time and to the extent the user wants them to be.

- AI-Person and People Discovery:
  Users now use a simple profile search by words and phrases. As a separate feature, AI-based search can be implemented to instantly discover the right people based on their profiles, chat metadata, and integrated APIs (including Teams, Slack, email, etc.). This feature can help users find solutions and connect with like-minded individuals. In business, it can be a game-changer, accelerating all business processes.

- Digital Business Card:
  The app functions as a digital business card, providing a unique link (QR code) to the user's online profiles. This allows the user to share relevant contact information (such as email, telephone, LinkedIn, Telegram, Instagram, etc.) for seamless communication.

- User Authentication:
  The app supports third parties JWT token authentication integration (such as Amazon Cognito, etc.) This requires the server support.

  ## Release Notes

  August 17, 2023 v0.57.0

- Added authentication based on AWS Cognito services. Now without limitation of functionality.
- Introduced bots with complex prompts processing: ReactJS FC Bot, ReactJS Unit Tests Bot, Render ReactJS Unit Tests Bot. They are capable to return non-trivial code snippets based on predefined patterns
- Added new simple AI personalities with predefined context: Master TRIZ Tech Bot, USCIS Support Bot, Software Resume Assistant Bot, Typescript Bot, C# Bot, Dr. Ophthalmologist Bot
- Added a subsection Prompt examples in the Profile section, that helps to interact with complex behavior bots. These samples provide templates for queries
- Improved UI:
  - added the ability to increase the chat input field
  - added markdown for the input messages
- Added better error handling for Chat GPT model requests

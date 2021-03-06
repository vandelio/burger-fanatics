#### Work in progress ####

# burger-fanatics
Social media and review platform for burger entusiasts


# Prerequisite:
 - Look into c4model before creating system overview
 - Look into AWS hosting services - Amplify - in order to hosting in the cloud and set up the project correctly.
 - Look into other AWS services
 - Create a test Amplify project
 - Test amplify api Graphql 
 - Test amplify DynomoDb 
 - Test amplify geo
 
# Preperations:
 - Create outline of system context                         - 👍
 - Create outline of container diagram                      - 👍
 - Create visual cues for the process                       - 👍
 - Wireframe a simple page diagram                          - 👍
 - Mock up a quick landingpage design                       - 👍
 - Setup git repo                                           - 👍
 - Setup a react app and initialize amplify project         - 👍
 - Test the deployed amplify project                        - 👍

# Project Requirements
  - Find nearby restaurants with burgers on the menu
  - See reviews for burger spots and give reviews with rating
  - Share pictures of burgers in the reviews
  - Share a post to make it a social media


  
# DB example
  - Store {title, description, calculatedrating, place, openinghours} for the Spots
  - Store {text, image, ratingtaste, ratingtexture and ratingvisual, userid, spotid} for the Spotreviews
  - Store {is_following_ids, image, name, username} for the Users
  - Store {text, image, link, userid} for the Userposts
  - Store {postid or reviewid, reviewtype, like, share, comment, userid} for the Interactions

Based on those we could get these; 
  - list of spots, with info and reviews
  - list of user posts, with interactions
  - list of recent review activities
  - list of recent following activities


# TODO
  - Create landing page                                     - Done
  - Implement nav tabbar with 3 tabs                        - Done
    - Home                                                  - Done
    - Burger Spots                                          - Done
    - My Profile                                            - Done

  - Pages in project:
    - Home landingpage with feed                            - Done
    - Burger spots overview and search                      - Done
    - Login / sign up                                       - Done with amplify auth.
    - My Profile                                            - It's there, but not a priority
  
  - Page overlays
    - Notifications/messages      Overlayed on Home         - Done
    - Edit My Profile             Overlayed on My Profile   - It's there, but not a priority


  # Future prospects
    - Add like/share/comment function on post, spots and reviews.
    - Scrape restaurants data, to find burgerspots with menu and location, in order to display searchable burgerspots.
    - Geo location for finding the spot near the user.
    - Filter options on spot search
    - Add Profile
    - Add Groups
    - Add follow User or Group
    Etc. :)

  

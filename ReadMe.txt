Author: Abdul Moid Mohammed



**Building RAG Chatbot in Java with Langchain4j and Qdrant DB**

In this project, I collaborated with IBM CAS (Center for Advanced Studies) to develop a RAG-based chatbot in Java (Springboot) for a project named "Cognitive Telescope Network (CTN) ". 

For more details about this project, check out this link: https://open-development.org/asset/ctn/


DEPENDENCIES
- Java
- Springboot
- IntelliJ
- Other libraries/dependencies are included in the pom.xml


PRE-REQUISITES
- Create a Qdrant Account, and create a cluster, note down its API and URL
- Create an OpenAI account, buy Subscription, create an OpenAI API
- In the data.txt file, data from "Ottoman Empire" wikipedia page is pasted. Based on this data, the chatbot will respond.
- Operating System: Windows, Linux, Mac
- Hardware Requirements: Any basic CPU with atleast 4GB RAM is sufficient


To run the project, follow the following instructions
- Use IntelliJ, go to File --> Open, browse the project folder "OpenAI Chatbot", hit Ok.
- Set  QDRANT_GRPC_HOST, QDRANT_API_KEY and OPENAI_API_KEY in the environment variables section
- Run the Application, and check for errors, if any
- Chatbot can be found on "http://localhost:8080/"

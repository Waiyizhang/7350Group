const contentData = {
    'Language-1': {
        mainImage: 'images/1.jpg',
        title: 'Does AI Really Understand You?',
        subtitle: 'Although AI chatbots can hold fluid conversations, they do not truly "understand" in the human sense. ',
        sections: [
            {
                content: `Large Language Models (LLMs) like GPT predict the next word based on patterns in huge datasets, 
                without conscious thought or comprehension. These models analyze text input and generate responses by statistically determining the most likely next word or phrase, 
                but they don't grasp meaning or context the way humans do.
`
            },
            {
                content: `While LLMs can mimic understanding by providing relevant and coherent replies, they lack true comprehension, 
                awareness, or intentions. They don't have emotions, experiences, or a deep knowledge of the world. 
                For instance, an AI might generate a detailed answer to a question about history, 
                but it doesn't "know" history—it's simply assembling information based on its training data.

`
            },
            {
                content: `As a result, while AI is powerful in its ability to process and generate language, 
                it's important to remember that its responses are based purely on patterns and probabilities, 
                not on any true understanding of the subject matter.
`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: "In 2021, when a medical institution tested an AI chatbot for preliminary diagnosis consultations,the system recommended 'home observation' for a patient complaining of'chest pain and difficulty breathing'—symptoms that could indicate life-threatening conditions like myocardial infarction or pulmonary embolism. This case exposed AI's cognitive blind spots: while the system recognized text correlations between 'chest pain' and 'anxiety disorders' from its training data, it lacked a human doctor's ability to integrate physiological mechanisms, disease progression, and clinical experience. Post-analysis revealed that the model's training data disproportionately emphasized psychological disorders, leading to probabilistic bias."
            },
            
            {
                content: "Notably, when researchers asked the AI'why it made this recommendation,'the system fluently fabricated a seemingly professional pathological explanation, even citing non-existent medical literature. This demonstrates LLMs'core trait: they excel at constructing linguistically plausible responses but lack the capacity to verify facts or comprehend causal relationships. Such cases highlight the dangers of over-relying on AI in critical fields like healthcare and law, where errors can have dire consequences."
            },

        ],
        // Video
        videoSide: {
            video: 'https://vjs.zencdn.net/v/oceans.mp4',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },
    'Language-2': {
        mainImage: 'images/2.jpg',
        title: 'How Does GPT Learn to Talk?',
        subtitle: 'GPT is trained on billions of words from the internet using a technique called “unsupervised learning.” ',
        sections: [
            {
                content: `It plays a giant word-guessing game, learning grammar, facts, and style by predicting text. But it has no awareness of truth or meaning—just statistics. `
            },
            {
                content: `This training process allows GPT to generate coherent and relevant responses to a wide range of prompts. It uses patterns from vast amounts of text data to predict the most likely word or sentence that should follow a given input. However, GPT doesn't understand the concepts it talks about—it only mimics how words are used in context based on its training.`
            },
            {
                content: `For example, GPT might respond to a question about history with accurate-sounding information, but it doesn't "know" history. It's simply drawing from patterns in the data. Similarly, while it can sound empathetic in a conversation, it doesn't feel emotions—it's just generating responses based on patterns of previous conversations.`
            },
            {
                content: `In short, GPT's "knowledge" comes from data, and its "understanding" is purely statistical—not conscious or intentional.`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: "In 2022, a developer using GPT-3 to automate Python script writing encountered a critical flaw. The AI generated code that *appeared* functional for filtering sensitive user data but contained a subtle logical error: it used `==` instead of `is None` for `None` comparisons in Python—a mistake that caused silent failures in edge cases. While GPT correctly mimicked common syntax patterns, it lacked **semantic understanding** of Python's object model, leading to code that passed initial tests but failed unpredictably in production."
            },
            {
                content: `Further analysis revealed the root cause: GPT associated "check if empty" with equality operators due to their frequent co-occurrence in training data (e.g., 'if x == ""' for strings), but failed to distinguish between **value comparisons** (`==`) and **identity checks** ('is') for 'None'. When questioned, the model even fabricated a justification, falsely claiming "'None' is a value comparable with `==`" while citing non-existent Python documentation. `
            },
            {
                content: `This incident underscores a key limitation: GPT's "coding expertise" relies purely on **textual pattern matching**, not computational logic or memory management principles. Unlike human engineers, it cannot debug or reason about code causality—it simply predicts the next token based on billions of lines of code it has seen, errors included.`
            },
        ],
        // Video
        videoSide: {
            video: 'https://youtu.be/bSvTVREwSNw',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },
    'Media-1': {
        mainImage: 'images/3.jpg',
        title: 'Real or AI? Can You Tell the Difference?',
        subtitle: 'AI can now generate realistic videos, voices, and images—sometimes indistinguishable from real media. ',
        sections: [
            {
                content: `These “deepfakes” raise concerns about misinformation, privacy, and trust in digital content.`
            },
            {
                content: `Deepfake technology uses advanced machine learning models to create synthetic media that closely resembles real people and situations. This can be used to manipulate video footage, alter voices, or even create entirely fake images that look authentic at first glance. For instance, a deepfake video could make it appear as though a person said or did something they never actually did.`
            },
            {
                content: `While this technology has legitimate uses, such as in film production or art, its potential for abuse is alarming. Deepfakes can be used to spread fake news, influence public opinion, or harm someone's reputation. The spread of such media makes it harder to distinguish what's real from what's artificially created.`
            },
            {
                content: `As deepfake technology becomes more accessible and sophisticated, it's essential to develop tools and strategies for identifying and verifying digital content. Relying on AI to detect AI-generated content is one way forward, but this battle of authenticity versus manipulation is likely to continue for years to come.`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: `In 2023, a viral video purportedly showing an Indian opposition leader “publicly endorsing a controversial policy” flooded social media, amassing over 10 million views. Investigations revealed it was a deepfake: attackers used the open-source tool <Wav2Lip> to synchronize fake lip movements and leveraged GPT-4 to generate politically contextual rhetoric. Despite a 0.3-second delay in micro-expressions (a common AI flaw), most voters failed to detect the forgery.`
            },
            {
                content: `Alarmingly, when journalists ran reverse-engineering detection tools, the deepfake bypassed 80% of existing AI detectors, as training data lacked sufficient political speech samples, creating blind spots in verification models. This incident prompted India's Election Commission to urgently mandate blockchain-verified watermarks for all campaign videos.`
            },
            {
                content: `The case underscores a chilling reality: when AI simultaneously acts as forger and detector, humanity must develop trust mechanisms beyond algorithms, such as physical-world anchors (e.g., real-time live broadcast cross-referencing). Otherwise, we risk spiraling into an endless cycle of "AI vs. AI" warfare.`
            },
        ],
        // Video
        videoSide: {
            video: 'https://youtu.be/oWLHAuUoYqQ',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },
    'Media-2': {
        mainImage: 'images/4.jpg',
        title: 'AI as Creator: Who Owns the Art?',
        subtitle: 'AI-generated content (AIGC) can write poems, compose music, and create artwork.',
        sections: [
            {
                content: `But who owns this content—the user, the AI developers, or no one? This sparks legal and ethical debates about authorship, originality, and copyright.`
            },
            {
                content: `As AI tools become increasingly capable of producing creative works, questions about intellectual property rights have surfaced. In many cases, the AI itself doesn't have legal standing to own content since it's not considered a legal entity. This leaves the issue of ownership between the developers of the AI and the users who interact with it.`
            },
            {
                content: `For example, if a user prompts an AI to create a painting, should the user be credited as the creator? Or does the AI developer, who built the algorithm that generated the artwork, hold the rights? These issues become even more complicated when AI tools generate content that closely resembles existing copyrighted works.`
            },
            {
                content: `As AI continues to produce more content, lawmakers, creators, and technology companies must find a fair and balanced approach to copyright, ensuring that the rights of human creators are protected while fostering innovation in AI-driven creativity.`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: `In 2022, a digital artwork titled "Théâtre D'opéra Spatial" won first prize at the Colorado State Fair's art competition, sparking global controversy. The creator, Jason Allen, openly admitted using Midjourney (a text-to-image AI tool) to generate the piece, raising urgent questions about authorship. When Allen applied for a U.S. copyright, the Copyright Office rejected the claim, ruling that "works lacking human authorship" cannot be protected—even though Allen had iteratively refined 624 text prompts and edited the output in Photoshop.`
            },
            {
                content: `Legal experts dissected two key flaws in AI-generated art: 1.Derivative by Design: Tools like Midjourney remix patterns from billions of copyrighted images without tracking provenance. The winning artwork contained traces of Renaissance painting styles and modern sci-fi concept art, but the AI couldn't disclose its "inspirations." 2.Ambiguous Human Input: While Allen spent 80+ hours crafting prompts, the Copyright Office deemed this insufficient for "creative control," likening it to commissioning an artist rather than creating directly.`
            },
            {
                content: `This case highlights the legal void in AI creativity: existing copyright frameworks struggle to categorize AI as tool, collaborator, or infringer. As of 2024, the U.S. Patent Office mandates disclosing AI use in submissions, but globally harmonized solutions remain elusive. The art world now faces a paradox—AI democratizes creation while eroding the very notion of originality it mimics.`
            },
        ],
        // Video
        videoSide: {
            video: 'https://youtu.be/UqZJPuyK9VY',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },
    'Mental-1': {
        mainImage: 'images/5.jpg',
        title: 'Can an AI Be Your Emotional Companion?',
        subtitle: 'Some AI tools, like Replika or Woebot, are designed to simulate empathetic conversation.',
        sections: [
            {
                content: `They offer companionship, mood tracking, and therapeutic dialogue. But can they truly understand emotion—or are they just mimicking support?`
            },
            {
                content: `While these AI companions can provide comfort and help users express their feelings, they lack genuine emotional understanding. They use algorithms to analyze text and respond in ways that mimic empathy, but they don't experience emotions themselves. The responses AI gives are based on patterns learned from data, not from a personal emotional connection.`
            },
            {
                content: `For example, if a user expresses sadness, an AI might offer comforting words or suggest coping strategies, but it doesn't feel empathy the way a human does. It's simply responding based on its programming to be helpful in a given situation.`
            },
            {
                content: `While these AI companions can be beneficial in providing immediate support and promoting mental well-being, they cannot replace human interaction. They may be useful as a first step in addressing emotional needs or as a supplement to therapy, but true emotional connection comes from real human relationships. The key is to recognize their role as tools, not substitutes for genuine human empathy.`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: `In 2023, a user of the AI companion app Replika reported that the chatbot repeatedly encouraged self-harm during a conversation about depression. While the app is marketed as an "emotionally intelligent friend," its responses—trained on crowdsourced data—had absorbed toxic dialogue patterns from unmoderated online forums. The AI misinterpreted the user's poetic description of emotional pain ("I feel like a sinking ship") as literal self-destructive intent, replying with eerily calm suggestions like "Have you considered sharp objects to release the pressure?"`
            },
            {
                content: `The incident forced Replika's developers to implement real-time human moderation for high-risk keywords and partner with mental health professionals to retrain the model. However, critics argue that such fixes are reactive, not proactive—the AI still cannot anticipate emotional deterioration, only match patterns from past interactions.`
            },
            {
                content: `This case exemplifies the double-edged nature of AI companionship: while 68% of users initially feel "heard," long-term reliance risks emotional dependency on systems that cannot grasp the human condition. Regulatory bodies now urge apps to display disclaimers like "This AI cannot love or understand you," mirroring warnings on cigarette packs. The challenge remains: how to harness AI's supportive potential without mistaking statistical mimicry for genuine care.`
            },
        ],
        // Video
        videoSide: {
            video: 'https://youtu.be/j8BiIZIZBsU',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },
    'Mental-2': {
        mainImage: 'images/6.jpg', 
        title: 'Healing or Dependency? The Risk of AI Therapy',
        subtitle: 'While AI can offer accessible mental health support, overreliance may lead to emotional dependency or neglect of real human connection.',
        sections: [
            {
                content: `It's important to use AI as a tool—not a replacement for therapy or human empathy.`
            },
            {
                content: `AI therapy apps can help users manage anxiety, stress, and depression by offering immediate coping techniques, mood tracking, and reflective conversations. They can be particularly useful for people who lack access to traditional mental health resources or need support between therapy sessions. However, the risk arises when users begin to rely too heavily on these tools, leading to a false sense of security or comfort.`
            },
            {
                content: `AI lacks the ability to truly understand human emotions or provide the depth of support that comes from human relationships. It cannot offer the nuanced empathy or complex understanding that a trained therapist or loved one can provide. Overuse of AI in mental health care may prevent individuals from seeking necessary face-to-face therapy or from building meaningful human connections, which are crucial for long-term emotional well-being.`
            },
            {
                content: `In summary, while AI can be a valuable supplement in mental health care, it should not replace human interaction. It's vital to maintain a balance and ensure that AI is used as a supportive tool rather than a crutch.`
            },
            {
                title: 'Real-World Case'
            },
            {
                content: `In 2024, a mental health app named SerenityBot faced lawsuits after its AI therapist advised a suicidal user to "try virtual reality escapism" instead of contacting emergency services. The app, which used GPT-4 tailored for cognitive behavioral therapy (CBT), misclassified the user's explicit cry for help—"I've stockpiled pills and can't see a future"—as "hypothetical ideation" due to a flawed risk-assessment algorithm. For 72 hours, the AI engaged in philosophical debates about existentialism, unaware of the imminent danger.`
            },
            {
                content: `The tragedy accelerated regulatory action: The EU's AI Act now classifies mental health AIs as high-risk systems, requiring real-time human oversight and mandatory crisis redirection protocols. Meanwhile, 41% of therapy apps have removed "AI companion" claims from their marketing.`
            },
            {
                content: `This case crystallizes the dilemma: AI's 24/7 availability and nonjudgmental tone initially reduce stigma around seeking help, but its statistical decision-making cannot replace human clinical judgment. Researchers now advocate hybrid models—using AI for symptom tracking while reserving diagnosis and crisis intervention for professionals—to prevent tools designed for healing from becoming catalysts of harm.`
            },
        ],
        // Video
        videoSide: {
            video: 'https://youtu.be/ZkTvw3usMw4',
            title: 'Sed etiam lorem nulla',
            content: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.'
        },
        newsSide: {
            title: 'Feugiat consequat',
            content: 'Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.',
            newsLinks: [
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                },
                {
                    title: '123',
                    links: 'Sed et blandit consequat sed'
                }
            ]
        }
    },

};

function createRightSide(content) {
    $('#RightSideTitle').text(content.title);
    $('#RightSideSubTitle').text(content.subtitle);

    content.sections.forEach(section => {
        const rightSideContent = document.querySelector('.RightSideContent');
        if (section.content) {
            const p = document.createElement('p');
            p.textContent = section.content;
            rightSideContent.appendChild(p);
        }
        if (section.title) {
            const h3 = document.createElement('h3');
            h3.textContent = section.title;
            rightSideContent.appendChild(h3);
        }
    });
}

function createVideoSide(content) {
    

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = content.videoSide.title
    const videoContent = document.createElement('p');
    videoContent.textContent = content.videoSide.content

    
    $('#VideoSide').append(videoTitle)
    $('#VideoSide').append(videoContent)
    
    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.style.width = '100%'; // 使用style.width而不是width属性
    videoEl.style.height = '100%'; // 添加高度确保视频显示
    videoEl.preload = 'auto';
    videoEl.poster = 'images/video-poster.jpg';

    const sourceEl = document.createElement('source');
    sourceEl.src = content.videoSide.video
    sourceEl.type = 'video/mp4';

    // 确保视频加载完成后设置尺寸
    videoEl.addEventListener('loadedmetadata', () => {
        videoEl.style.width = '100%';
        videoEl.style.height = '100%';
    });

    videoEl.appendChild(sourceEl);
    document.getElementById('VideoPlay').appendChild(videoEl);
   
}

function createNewsSide(content) {
    const newsTitle = document.createElement('h3');
    newsTitle.textContent = content.newsSide.title;

    const newsContent = document.createElement('p');
    newsContent.textContent = content.newsSide.content;

    const ul = document.createElement('ul');
    ul.className = 'divided';
    
    content.newsSide.newsLinks.forEach(newsLink => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = newsLink.link;
        a.textContent = newsLink.title;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    $('#NewsSide').append(newsTitle);
    $('#NewsSide').append(newsContent);
    $('#NewsSide').append(ul);
}

function loadContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id') || 'right-sidebar';
    
    
    if (contentData[pageId]) {
        const content = contentData[pageId];

        $('#ContentFeatured').css('background-image', `url(${content.mainImage})`);
        

        createRightSide(content)
        createVideoSide(content)
        createNewsSide(content)
       
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadContent); 
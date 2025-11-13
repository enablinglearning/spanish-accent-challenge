# How to Share Your Game on Facebook

This guide will help you share the Spanish Accent Challenge game on your Facebook group so members can play it directly in their browsers.

## 📋 Step-by-Step Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/enablinglearning/spanish-accent-challenge
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** from the dropdown
5. The page will automatically deploy when the workflow runs (it should already be running from the push)

### Step 2: Wait for Deployment

- After pushing, GitHub Actions will automatically build and deploy your game
- You can check the status in the **Actions** tab of your repository
- The deployment usually takes 2-3 minutes
- Once complete, your game will be available at:
  ```
  https://enablinglearning.github.io/spanish-accent-challenge/
  ```

### Step 3: Share on Facebook Group

There are several ways to share the game link on Facebook:

#### Option A: Simple Post with Link (Recommended)
1. Go to your Facebook group
2. Click **Create Post**
3. Write a message like:
   ```
   🎮 ¡Acentúa la Frase! 
   
   Practica las tildes en español con este juego interactivo. 
   Haz clic en el enlace para jugar:
   
   https://enablinglearning.github.io/spanish-accent-challenge/
   ```
4. Paste the link - Facebook will automatically create a preview card
5. Click **Post**

#### Option B: Using Facebook's Link Format
1. Copy this formatted link:
   ```
   https://enablinglearning.github.io/spanish-accent-challenge/
   ```
2. Create a new post in your group
3. Paste the link - Facebook will show a preview
4. Add your description and post

#### Option C: Pin the Post (Optional)
1. After posting, click the three dots (...) on your post
2. Select **Pin to top** so it stays visible for group members

### Step 4: Test the Link

Before sharing, make sure the link works:
1. Open the link in your browser: https://enablinglearning.github.io/spanish-accent-challenge/
2. Test the game to ensure everything works
3. Try it on mobile too (the game is responsive)

## 🎯 Best Practices for Facebook Sharing

### Write an Engaging Post
- **Start with an emoji** (🎮, 📚, ✏️) to catch attention
- **Explain what the game does** briefly
- **Mention it's free** and easy to use
- **Encourage members** to try it and share their scores

### Example Post Templates

**Template 1 (Casual):**
```
🎯 ¿Quieres mejorar tu ortografía en español?

He creado un juego gratuito para practicar las tildes. Es fácil, divertido y educativo. 
¡Pruébalo y comparte tu puntuación!

👉 https://enablinglearning.github.io/spanish-accent-challenge/
```

**Template 2 (Educational):**
```
📚 Para los que están estudiando español académico:

Este juego te ayuda a practicar las reglas de acentuación en español de manera interactiva. 
6 niveles, 60 frases. Perfecto para prepararse para exámenes como el BTLPT.

Juega aquí: https://enablinglearning.github.io/spanish-accent-challenge/
```

**Template 3 (Motivational):**
```
✨ Nuevo recurso disponible para el grupo:

¡Acentúa la Frase! - Un juego para dominar las tildes en español.
3 vidas, sistema de puntuación, y 6 niveles de dificultad progresiva.

¿Quién logrará los 600 puntos? 🏆

https://enablinglearning.github.io/spanish-accent-challenge/
```

## 📱 Mobile Compatibility

The game is fully responsive and works great on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

When members click the link on Facebook mobile, the game will open directly in their browser and play perfectly.

## 🔄 Updating the Game

If you make changes to the game:
1. Make your code changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update game"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy
4. Wait 2-3 minutes for the new version to be live
5. The same link will now show the updated game

## 🛠️ Troubleshooting

### Link doesn't work?
- Check the **Actions** tab on GitHub to see if deployment succeeded
- Make sure GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- Wait a few more minutes - first deployment can take longer

### Game doesn't load?
- Clear your browser cache
- Try opening in an incognito/private window
- Check browser console for errors (F12 → Console tab)

### Need to change the game URL?
The URL is based on your GitHub username and repository name:
- Username: `enablinglearning`
- Repository: `spanish-accent-challenge`
- URL: `https://enablinglearning.github.io/spanish-accent-challenge/`

If you change the repository name, the URL will change too.

## ✅ Quick Checklist

- [ ] GitHub Pages enabled (Settings → Pages → Source: GitHub Actions)
- [ ] Deployment completed (check Actions tab - green checkmark)
- [ ] Tested the link in browser
- [ ] Tested on mobile device
- [ ] Created engaging Facebook post
- [ ] Shared link in your Facebook group
- [ ] (Optional) Pinned the post to top

## 📊 Tracking Engagement

After sharing:
- Check how many people clicked the link (Facebook Insights)
- Ask group members for feedback
- Monitor if people are playing and sharing scores

---

**Your Game URL:** https://enablinglearning.github.io/spanish-accent-challenge/

Happy sharing! 🎉


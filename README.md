# angular-speech-recognition
A reusable directive which implements the Webkit Speech Recognition API through forms.

## How to use it

The idea is that you can surround the content you usually put inside a form element with the speech-recognition directive and then, it will take care of handle speech recognition for you.

You can move through the form by saying the key-words **next**, **previous** and **submit**.
A simple use for that:

```
<am-speech-recognition-form>
  <!-- some inputs and labels in here -->
</am-speech-recognition-form>
```

Check the sample to see how it works!

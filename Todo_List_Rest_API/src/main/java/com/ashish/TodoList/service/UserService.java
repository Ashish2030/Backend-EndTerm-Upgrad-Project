package com.ashish.TodoList.service;
import com.ashish.TodoList.model.Users;
import com.ashish.TodoList.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService
{
    //getAllPosts, getPost, addPost, updatePost, deletePost

    @Autowired
    private UserRepository userRepository;
    public void addPost(Users post)
    {
        this.userRepository.save(post);
    }
    public List<Users> search(String keyword)
    {
        return userRepository.findByNameIgnoreCaseContaining(keyword);
    }

    public List<Users> getAllPost()
    {
        return userRepository.findAll();
    }
    public void deletePost(Integer id){
        this.userRepository.deleteById(id);
    }



}


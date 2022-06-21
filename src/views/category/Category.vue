<template>
    <div class="wrapper">
        <ul class="content">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>32</li>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Category',
    data() {
        return {
             scroll: null   
        }
    },
    mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'), { 
        probetype: 1,
        pullUpLoad: true

        })
        this.scroll.on('scroll', (position) => {
            console.log(position)
        })
        this.scroll.on('pullingUp', () => {
            console.log("上拉加载更多")
        })
    }
}
</script>

<style scoped>
    .wrapper{
        height:100px;
        background:red;

        overflow: hidden;
    }
</style>